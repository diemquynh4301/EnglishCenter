import { Body, Controller, Get, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { UserService } from './../../service/user.service';
import { Request, Response } from 'express';

import { Registant } from "src/models/registant.entity";
import { AuthGuard } from "@nestjs/passport";
import { UserRole } from "src/constant/user.constant";
import { Roles } from "src/decorators/roles.decorator";
import { RolesGuard } from "src/guard/role.guard";
import { TeacherService } from "src/service/teacher.service";
// import { TeacherService } from "src/service/teacher.service";

@Controller('teacher')
export class TeacherController{
    constructor(private teacherService: TeacherService) {}
    
    
    @Roles(UserRole.TEACHER)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get()
    @Render('teacher/index')
    async index(@Req() req: Request) {
        var user = req["user"];
        const classs = await this.teacherService.getClass(user.username);
        return{classs};
    }

       
    @Roles(UserRole.TEACHER)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('user') 
    @Render('teacher/user')
    async user( @Req() req: Request) {
        const userTaken = req["user"];
        var a = await this.teacherService.getUser(userTaken.username);
        var user = a[0];
        // console.log(roc);
        return {user};
    }

    
}