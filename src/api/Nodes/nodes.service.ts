import { v4 as uuidV4 } from 'uuid';
import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, InferAttributes, Op, ProjectionAlias, Sequelize, WhereOptions } from 'sequelize';
import { PaginationQueryDto } from '../../lib/pagination.dto.js';
import Companies from '../../models/companies.js';
import Users from '../../models/users.js';
import Nodes from '../../models/nodes.js';
import { CreateNodeDto } from './dto/create-nodes.dto.js';
import { FindNodesDto } from './dto/find-nodes.dto.js';
import { UpdateNodeDto } from './dto/update-nodes.dto.js';
import moment from 'moment';
import UsersSubscriptions from '../../models/usersSubscriptions.js';
import CompanySubscriptions from '../../models/companySubscriptions.js';
import DataLogs from '../../models/datalogs.js';

@Injectable()
export class NodesService {
    constructor(
        @InjectModel(Nodes)
        private NodesDB: typeof Nodes,

        @InjectModel(Companies)
        private CompaniesDB: typeof Companies,

        @InjectModel(UsersSubscriptions)
        private UsersSubscriptionsDB: typeof UsersSubscriptions,

        @InjectModel(CompanySubscriptions)
        private CompanySubscriptionsDB: typeof CompanySubscriptions,
    ) { }

    async create(createDto: CreateNodeDto) {
        let { name, description, address, coordinate, instalationDate, companyId } = createDto;

        const apiKey = uuidV4()
        const company = companyId ? await this.CompaniesDB.findByPk(companyId) : null

        if (!company && (!address || !coordinate)) {
            throw new BadRequestException('adress dan coordinate harus diisi')
        }

        const newNode = await this.NodesDB.create({
            companyId: company ? company.companyId : undefined,
            address,
            coordinate,
            name: name!,
            description: description!,
            instalationDate,
            apiKey,
        })

        if (!newNode) throw new UnprocessableEntityException('Data tidak bisa diproses');

        return 'success'
    }

    async findAll(filter: FindNodesDto, pagination: PaginationQueryDto) {
        const { paginationObj, searchObj, getMetaData } = pagination

        const { all, ownship } = filter
        const paginateObj = all ? {} : paginationObj

        const filterByOwnship: WhereOptions<InferAttributes<Nodes, { omit: never }>> = {
            companyId: ownship == 'public'
                ? { [Op.is]: null }
                : ownship == 'private'
                    ? { [Op.not]: null }
                    : {}
        }

        const { count, rows } = await this.NodesDB.findAndCountAll({
            attributes: { exclude: ['instalationDate', 'description', 'apiKey', 'updatedAt'] },
            where: {
                ...searchObj,
                ...filterByOwnship
            },
            include: {
                model: Companies,
                as: 'owner',
                attributes: ['name', 'companyId', 'type']
            },
            ...paginateObj,
            order: [[{ model: Companies, as: 'owner' }, 'name', 'ASC']]
        })


        return {
            rows,
            meta: getMetaData(pagination, count)
        };
    }

    async getSummary() {
        const sixHoursAgo = moment().subtract(6, 'hours').toDate();

        const all = await this.NodesDB.count()
        const publicNodes = await this.NodesDB.count({
            where: { companyId: { [Op.is]: null } }
        });

        const privateNodes = await this.NodesDB.count({
            where: { companyId: { [Op.not]: null } }
        });

        const activeNodes = await this.NodesDB.count({
            where: { lastDataSent: { [Op.gte]: sixHoursAgo } }
        })
        const nonActiveNodes = await this.NodesDB.count({
            where: { lastDataSent: { [Op.lt]: new Date() } }
        })

        const ownership = [
            { value: 'public', count: publicNodes },
            { value: 'private', count: privateNodes }
        ]

        const status = [
            { value: 'active', count: activeNodes },
            { value: 'nonactive', count: nonActiveNodes }
        ]

        return {
            all,
            ownership,
            status
        }
    }


    async findOne(id: number) {
        const node = await this.getNode(id, {
            include: [{
                model: Companies, as: 'owner', attributes: ['companyId', 'name', 'type']
            }],
        })

        node.dataValues.dataLogs = node.lastDataSent
            ? await node.getDataLogs({
                where: {
                    datetime: {
                        [Op.between]: [
                            moment(node.lastDataSent).subtract(1, 'days').toDate(),
                            node.lastDataSent
                        ]
                    }
                }
            })
            : []

        const countUserSubscription = await this.UsersSubscriptionsDB.count({ where: { nodeId: id } })
        const countCompanySubscribtion = await this.CompanySubscriptionsDB.count({ where: { nodeId: id } })

        return {
            ...node.toJSON(),
            countUserSubscription,
            countCompanySubscribtion
        }
    }

    async update(id: number, updateDto: UpdateNodeDto) {
        const node = await this.getNode(id)

        if (node.companyId) {
            updateDto.address = undefined
            updateDto.coordinate = undefined
        }

        const [affected] = await this.NodesDB.update({ ...updateDto }, { where: { nodeId: id } })

        if (!affected) throw new UnprocessableEntityException('Data tidak bisa diproses');

        return 'success'
    }

    async remove(id: number) {
        const node = await this.getNode(id)
        await node.destroy()

        return 'success'
    }

    async getSubscribeableNodes(companyId: number | undefined, userId: number | undefined, search: string | undefined) {

        let isSubscribedQuery: ProjectionAlias[] = [];

        if (companyId) isSubscribedQuery = [[
            Sequelize.literal(`(
                SELECT COUNT(*) FROM companysubscriptions
                WHERE companysubscriptions.nodeId = Nodes.nodeId
                AND companysubscriptions.companyId = ${companyId || 'null'}
            )`),
            'isSubscribed',
        ]];

        if (userId) isSubscribedQuery = [[
            Sequelize.literal(`(
                SELECT COUNT(*) FROM userssubscriptions
                WHERE userssubscriptions.nodeId = Nodes.nodeId
                AND userssubscriptions.userId = ${userId || 'null'}
            )`),
            'isSubscribed',
        ]];

        const searchObj = search ? { name: { [Op.like]: search } } : {}

        const nodes = await this.NodesDB.findAll({
            attributes: [
                'nodeId',
                'name',
                'coordinate',
                'isUptodate',
                'lastDataSent',
                'createdAt',
                'companyId',
                ...isSubscribedQuery
            ],
            where: {
                ...searchObj,
                companyId: { [Op.is]: undefined }
            }
        })

        return nodes
    };

    async getDownloadableNodes(user: Users, pagination: PaginationQueryDto) {
        const { paginationObj, searchObj, getMetaData } = pagination
        const { role } = user

        const whereOpt = { ...searchObj }

        if (role == 'manager') {
            const companyIds = (await user.getCompanies({ attributes: ['companyId'] })).map(e => e.companyId!);

            whereOpt[Op.or] = [
                { companyId: { [Op.in]: companyIds } },
                { '$companySubscriptions.companyId$': { [Op.in]: companyIds } },
            ]
        }

        const { count, rows } = await this.NodesDB.findAndCountAll({
            attributes: ['nodeId', 'name'],
            where: whereOpt,
            ...paginationObj
        });


        return {
            rows,
            meta: getMetaData(pagination, count)
        };
    }


    async getDatalogs(nodeId: number, start: string, end: string,) {
        const startDate = new Date(start)
        const endDate = new Date(end)

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new BadRequestException('tanggal tidak valid')
        }

        const node = await this.getNode(nodeId, {
            attributes: ['nodeId', 'name', 'isUptodate', 'lastDataSent'],
            include: [{
                model: DataLogs,
                where: {
                    datetime: { [Op.between]: [startDate, endDate] }
                },
                required: false
            }],
        })

        return {
            startDate,
            endDate,
            result: node
        }
    }

    private async getNode(id: number, opt?: FindOptions<InferAttributes<Nodes, { omit: never }>>) {
        const node = await this.NodesDB.findOne({
            where: { nodeId: id },
            ...opt
        })

        if (!node) throw new NotFoundException()
        return node
    }
}