import { Body, Controller, Get, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from './../../service/user.service';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt'; 
import { Registant } from "src/models/registant.entity";
import { AuthGuard } from "@nestjs/passport";
import { RegistantOfClass } from "src/models/registantOfClass.entity";
import { UserRole } from "src/constant/user.constant";
import { Roles } from "src/decorators/roles.decorator";
import { RolesGuard } from "src/guard/role.guard";

@Controller('users')
export class UserController{
    constructor(private userService: UserService) {}
    
    
    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    // @UseGuards(AuthGuard('jwt'))
    @Get()
    @Render('users/index')
    async index() {
        // const userTaken = req["user"];
        // var a = await this.userService.getUser(userTaken.username);
        const userList = await this.userService.getAll();
        // console.log(registant);
        return {
            userList: userList,
            // a
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
        await this.userService.edit(user);
        res.redirect('/login/user');
    }
    
    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('/check')
        async check(@Res() res: Response, @Req() req: Request, @Body() registant: Registant){
            await this.userService.updateConfirm(registant.username);
            res.redirect('/users');

    }

    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('/student')
    @Render('users/ROC')
    async ROC() {
        const list = await this.userService.getAllStudent();
        return{list};
    }

    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('/fee')
        async fee(@Res() res: Response, @Req() req: Request, @Body() roc: any){
            console.log(roc);
            await this.userService.updateFee(roc.id, roc.classID);
            return res.redirect('/users/student');

    }

    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('/edit')
    @Render('users/edit')
    async user(@Req() req: Request) {
        const userTaken = req["user"];
        var a = await this.userService.getUser(userTaken.username);
        var user = a[0];
        // console.log(roc);
        return {user};
    }


    @Roles(UserRole.EMPLOYEE)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('/statistic')
    @Render('users/statistic')
    async statistic(@Req() req: Request) {
        // const userTaken = req["user"];
        // var a = await this.userService.getUser(userTaken.username);
        // var user = a[0];
        // // console.log(roc);
        // return {user};
    }



    

}