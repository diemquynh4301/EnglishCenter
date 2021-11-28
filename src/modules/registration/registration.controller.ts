import { Body, Controller, Get, Param, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/models/user.entity";
import { CourseService } from "src/service/course.service";
import { UserService } from "src/service/user.service";
import {Response} from "express";
import { RegistantOfClass } from "src/models/registantOfClass.entity";
import { Course } from "src/models/course.entity";

@Controller('registration')
export class RegistrationController{
    constructor(private courseService: CourseService, private userService: UserService) {}
    @Get(':id')
    @Render('registration/index')
    async index(@Param() params) {
        const courseList = await this.courseService.getAllCourse();
        
        var courseTaken = await this.courseService.getOne(params.id);
        var classList = await this.courseService.getClass(courseTaken.coursename);
        // var classTaken = await this.courseService.getOneClass(params.id);
        console.log(classList);
        return {
            courseList: courseList,
            classList: classList,
            courseTaken,
            // classTaken
        }
    }

    // async add(user: User): Promise<void> {
    //     await this.facultyRepository.update(faculty.id, faculty);
    // }

    @Post('/add')
    async add(@Body() user: User, @Body() registantOfClass: RegistantOfClass, @Res() res: Response) {
        // await this.userService.add(user);
        // await this.userService.addRegistant(registant);
        return res.redirect('/course');   
    }    
}
    