import { Body, Controller, Delete, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../decorator/user.decorator.js';
import Users from '../models/users.js';
import LocalAuthenticationGuard from './local.guard.js';
import { Request, Response } from 'express';
import { AuthService } from './auth.service.js';

@Controller('')
@ApiTags('auth')
export class AuthController {
    constructor(private service: AuthService) { }

    @UseGuards(LocalAuthenticationGuard)
    @Post('/login')
    async login(@User() user: Users) {
        const { password, ...result } = user.toJSON()
        return result
    }

    @Get('/verify/:token')
    async verify(
        @Param('token') token: string,
    ) {
        return await this.service.verifyUser(token)
    }


    @Delete('/logout')
    logout(@Req() req: Request, @Res() res: Response) {
        req.logout(() => {
            res.clearCookie('connect.sid');
            res.status(200).send('Logout successful');
        });
    }
}
