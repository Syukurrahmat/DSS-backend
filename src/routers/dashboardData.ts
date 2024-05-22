import Nodes from '../models/nodes.js';
import db from '../models/index.js';
import moment from 'moment';

import { calculateISPU, polutantToISPU } from '../analitic/ISPU.js';
import { average, arrayOfHours as generateArrayOfHours } from '../utils/utils.js';
import { Op } from 'sequelize';
import { GRKtoCategorize } from '../analitic/GRK.js';
import DataLogs from '../models/datalogs.js';
import { DashboardDataType, ResultOfMappingNode, ResultOfMultiNodeStats, SingleNodeAnalysis } from '../types/dashboardData.js';

export default async function dashboardData(companyId = 40) {

    const companies = await db.Companies.findByPk(companyId, {
        attributes: { exclude: ['description', 'address', 'updatedAt'] }
    });


    const subscribedNodes = await companies.getSubscribedNodes({
        attributes: ['nodeId', 'name', 'coordinate',  'status', 'ownerId', 'lastDataSent'],
        joinTableAttributes: [],
        include: [{
            model: db.DataLogs,
            where: {
                datetime: {
                    [Op.lte]: db.sequelize.col('Nodes.lastDataSent'),
                    [Op.gt]: db.sequelize.literal(`DATE_SUB(Nodes.lastDataSent, INTERVAL 24 HOUR)`)
                }
            },
        }],
        order: [
            [{ model: db.DataLogs, as: 'dataLogs' }, 'datetime', 'DESC'],
        ],
    })

    const mappedNodes = await Promise.all(subscribedNodes.map(mappingNode))

    const indoorNodes = mappedNodes
        .filter(({ meta }) => meta.isIndoor && meta.dataIsUptodate)
    const outdoorNodes = mappedNodes
        .filter(({ meta }) => !meta.isIndoor && meta.dataIsUptodate)

    const nodeBystatus = {
        active: subscribedNodes.filter(e => e.status == 'active'),
        noSendData: subscribedNodes.filter(e => e.status == 'idle'),
        nonactive: subscribedNodes.filter(e => e.status == 'nonactive'),
    }

    const result: DashboardDataType = {
        companyInfo: {
            ...companies.toJSON(),
            countNodes: subscribedNodes.length,
        },
        indoor: {
            countNodes: {
                all: subscribedNodes.filter(e => e.ownerId).length,
                active: nodeBystatus.active.filter(e => e.ownerId).length,
                noSendData: nodeBystatus.noSendData.filter(e => e.ownerId).length,
                nonactive: nodeBystatus.nonactive.filter(e => e.ownerId).length,
            },
            data: indoorNodes.length === 1 ? await singleNodeAnalysis(indoorNodes[0])
                : indoorNodes.length > 1 ? multiNodeStatAnalysis(indoorNodes) : null,
        },
        outdoor: {
            countNodes: {
                all: subscribedNodes.filter(e => !e.ownerId).length,
                active: nodeBystatus.active.filter(e => !e.ownerId).length,
                noSendData: nodeBystatus.noSendData.filter(e => !e.ownerId).length,
                nonactive: nodeBystatus.nonactive.filter(e => !e.ownerId).length,
            },
            data: outdoorNodes.length === 1 ? await singleNodeAnalysis(outdoorNodes[0])
                : outdoorNodes.length > 1 ? multiNodeStatAnalysis(outdoorNodes) : null,
        },
        nodes: mappedNodes.map(({ node: { dataLogs, ...n }, ...e }) => ({
            node: { ...n },
            ...e
        }))
    }


    return result
}


/**
 * Mengembalikan data terbaru dari suatu node
 */
async function mappingNode(node: Nodes) {
    const { lastDataSent, dataLogs, status } = node

    const diffLastDataSentInHours = moment().diff(lastDataSent, 'hour')

    if (status != 'nonactive') {
        node.status = diffLastDataSentInHours > 6 ? 'idle' : 'active'
        await node.save()
    }

    if (!lastDataSent || status != 'active') {
        return {
            meta: {
                isIndoor: Boolean(node.ownerId),
                dataIsUptodate: false,
            },
            node: node.toJSON(),
        }
    }

    console.log("awikwok")
    const currentISPUTime = moment(node.lastDataSent).startOf('h')
    const ISPU = calculateISPU(node.dataLogs, currentISPUTime.toDate())

    const { co2, ch4, pm25, pm100, datetime } = dataLogs.at(0)


    const result: ResultOfMappingNode = {
        meta: {
            isIndoor: Boolean(node.ownerId),
            dataIsUptodate: true,
        },
        node: node.toJSON(),
        ispu: ISPU,
        ch4: { datetime, value: GRKtoCategorize(ch4, 'CH4') },
        co2: { datetime, value: GRKtoCategorize(co2, 'CO2') },
        pm25: { datetime, value: pm25 },
        pm100: { datetime, value: pm100 },
    };

    return result
}

async function singleNodeAnalysis(nodeAnalysis: ResultOfMappingNode): Promise<SingleNodeAnalysis> {
    let { ispu, ch4, co2, node } = nodeAnalysis
    let { nodeId, name, dataLogs, lastDataSent } = node

    const nodeinfo = { name, nodeId }


    const tambahan = await db.DataLogs.findAll({
        where: {
            datetime: {
                [Op.lte]: moment(lastDataSent).toDate(),
                [Op.gt]: moment(lastDataSent).subtract(25, 'hour').toDate(),
            },
            nodeId,
        },
        order: [['datetime', 'DESC']]
    })

    dataLogs = dataLogs.concat(tambahan)

    const currentISPUTime = moment(lastDataSent).startOf('h')
    const ISPUTren = generateArrayOfHours(currentISPUTime)
        .map((hour) => calculateISPU(dataLogs as DataLogs[], hour))


    return {
        ispu: { node: nodeinfo, current: ispu, tren: ISPUTren },
        ch4: { node: nodeinfo, current: ch4, tren: dataLogs.map(({ datetime, ch4 }) => ({ datetime, value: ch4 })) },
        co2: { node: nodeinfo, current: co2, tren: dataLogs.map(({ datetime, co2 }) => ({ datetime, value: co2 })) },
    }
}

/**
 * Menentikan Min Max and Average from each value
 */
function multiNodeStatAnalysis(nodeAnalysis: ResultOfMappingNode[]): ResultOfMultiNodeStats {
    const deletedDatalogsNodeData = nodeAnalysis.map(({ node, ...r }) => {
        const { name, nodeId } = node
        return {
            node: { name, nodeId },
            ...r
        }
    })

    const ISPUOnlyNodeData = deletedDatalogsNodeData.map(({ node, ispu }) => ({ node, data: ispu }))

    const highestISPU = ISPUOnlyNodeData.reduce((prev, curr) => (
        prev.data.value.at(0).ispuFloat > curr.data.value.at(0).ispuFloat ? prev : curr
    ))

    const lowestISPU = ISPUOnlyNodeData.reduce((prev, curr) => (
        prev.data.value.at(0).ispuFloat < curr.data.value.at(0).ispuFloat ? prev : curr
    ))

    const PM25Average = average(
        ISPUOnlyNodeData.map(e => e.data.value.find(e => e.pollutant == 'PM25').value)
    )
    const PM100Average = average(
        ISPUOnlyNodeData.map(e => e.data.value.find(e => e.pollutant == 'PM100').value)
    )

    const averageISPU = {
        datetime: ISPUOnlyNodeData[0].data.datetime,
        value: [
            polutantToISPU(PM25Average, 'PM25'),
            polutantToISPU(PM100Average, 'PM100')
        ].sort((a, b) => b.ispuFloat - a.ispuFloat)
    }

    const CH4OnlyNodeData = deletedDatalogsNodeData
        .map(({ node, ch4 }) => ({ node, data: ch4 }))

    const highestCH4 = CH4OnlyNodeData
        .reduce((prev, curr) => prev.data.value > curr.data.value ? prev : curr)

    const lowestCH4 = CH4OnlyNodeData
        .reduce((prev, curr) => prev.data.value > curr.data.value ? prev : curr)

    const averageCH4Value = average(CH4OnlyNodeData.map(e => e.data.value.value))

    const averageCH4 = {
        datetime: CH4OnlyNodeData[0].data.datetime,
        value: GRKtoCategorize(averageCH4Value, 'CH4')
    }

    const CO2OnlyNodeData = deletedDatalogsNodeData
        .map(({ node, co2 }) => ({ node, data: co2 }))

    const highestCO2 = CO2OnlyNodeData
        .reduce((prev, curr) => prev.data.value > curr.data.value ? prev : curr)

    const lowestCO2 = CO2OnlyNodeData
        .reduce((prev, curr) => prev.data.value < curr.data.value ? prev : curr)

    const averageCO2Value = average(CO2OnlyNodeData.map(e => e.data.value.value))

    const averageCO2 = {
        datetime: CO2OnlyNodeData[0].data.datetime,
        value: GRKtoCategorize(averageCO2Value, 'CO2')
    }

    return {
        ispu: {
            highest: highestISPU,
            lowest: lowestISPU,
            average: {
                data: averageISPU
            },
            list: ISPUOnlyNodeData
        },

        ch4: {
            highest: highestCH4,
            lowest: lowestCH4,
            average: {
                data: averageCH4
            },
            list: CH4OnlyNodeData

        },
        co2: {
            highest: highestCO2,
            lowest: lowestCO2,
            average: {
                data: averageCO2
            },
            list: CO2OnlyNodeData
        }
    }
}
