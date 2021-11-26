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
    @Post("add")
    async add(@Body() user: User, @Res() res: Response) {
        // const salt = await bcrypt.genSalt(15);
        // user.pass = await bcrypt.hash(user.pass, salt);
        await this.userService.add(user);
        return res.redirect('/course');        
    }
}