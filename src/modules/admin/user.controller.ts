import { Body, Controller, Get, Post, Render, Res } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from './../../service/user.service';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 

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


    @Post("/add")
    async add(@Body() user: any, @Res() res: Response) {
        var userToAdd: User = new User();
        userToAdd.fullname = user.fullname;
        userToAdd.phone = user.phone;
        userToAdd.email = user.email;
        userToAdd.username = user.username;
        userToAdd.pass = user.password;
        userToAdd.gender = (user.gender === '1');

        await this.userService.add(userToAdd);
        res.redirect("/course");
    }
}