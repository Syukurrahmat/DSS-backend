import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, Sequelize } from 'sequelize';
import { SUBS_LIMIT } from '../../../constants/server.js';
import { PaginationQueryDto } from '../../../lib/pagination.dto.js';
import Nodes from '../../../models/nodes.js';
import Users from '../../../models/users.js';
import { CreateSubscriptionDto } from './dto/create-subs.dto.js';
import Companies from '../../../models/companies.js';

@Injectable()
export class CompanyNodeSubsService {
    constructor(
        @InjectModel(Companies)
        private companyeDB: typeof Companies,
        @InjectModel(Nodes)
        private nodeDB: typeof Nodes,
    ) { }

    async createNodeSubscription(userId: number, createDto: CreateSubscriptionDto) {
        const company = await this.getCompany(userId)
        const nodeIds = createDto.nodeIds!

        const countSubscribed = await company.countSubscribedNodes()

        if (countSubscribed >= SUBS_LIMIT || nodeIds.length + countSubscribed > SUBS_LIMIT) {
            throw new ForbiddenException('Melebih batas yang diizinkan')
        }

        const nodes = await this.nodeDB.findAll({
            where: { nodeId: { [Op.in]: nodeIds.filter((e) => e) }, companyId : null },
            attributes: ['nodeId'],
        });

        if (nodes.length == 0) throw new NotFoundException('node tidak ditemukan')
        await company.addSubscribedNodes(nodes)

        return 'success'
    };


    async getSubscribedNodes(userId: number, pagination: PaginationQueryDto) {
        const { paginationObj, searchObj, getMetaData } = pagination
        const company = await this.getCompany(userId)

        const where = { ...searchObj }

        const [count, rows] = await Promise.all([
            company.countSubscribedNodes({ where }),
            company.getSubscribedNodes({
                attributes: [
                    'nodeId', 'name', 'coordinate', 'lastDataSent', 'isUptodate',
                    [Sequelize.col('UsersSubscriptions.createdAt'), 'joinedAt'],
                    [Sequelize.col('UsersSubscriptions.usersSubscriptionId'), 'subscriptionId']
                ],
                joinTableAttributes: [],
                where,
                ...paginationObj,
                order: [[Sequelize.col('joinedAt'), 'DESC']],
            })
        ])

        return {
            rows,
            meta: getMetaData(pagination, count)
        };
    };


    async removeNodeSubscription(userId: number, subscriptionId: number) {
        const company = await this.getCompany(userId)
        await company.removeSubscribedNode(subscriptionId)
        return 'success'
    };


    private async getCompany(id: number) {
        const company = await this.companyeDB.findOne({
            where: { companyId: id},
            attributes: { exclude: ['createdAt', 'updatedAt'] },
        })

        if (!company) throw new NotFoundException()
        return company
    }

}