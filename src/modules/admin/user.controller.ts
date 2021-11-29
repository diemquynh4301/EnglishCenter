import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from './../../service/user.service';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 
import { Registant } from "src/models/registant.entity";

@Controller('users')
export class UserController{
    constructor(private userService: UserService) {}
    @Get()
    @Render('users/index')
    async index() {
        const userList = await this.userService.getAll();
        return {
            userList: userList
        }
    }

    @Post("/checkId")
    async checkId(@Body('username') username: string) {
        let user = await this.userService.getByUsername(username);
        if (!user) return {
            status: "NOT_FOUND"
        }

        return {
            status: "FOUND"
        }
    }
    @Post('/edit')
        async edit(@Res() res: Response, @Body() user: User) {
        console.log(user);
        await this.userService.edit(user);
        res.redirect('/login/user');
    }



}