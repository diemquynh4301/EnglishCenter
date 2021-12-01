import { Body, Controller, Get, HttpCode, Param, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/models/user.entity";
import { CourseService } from "src/service/course.service";
import { UserService } from "src/service/user.service";
import {Response, Request} from "express";
import { RegistantOfClass } from "src/models/registantOfClass.entity";
import { Course } from "src/models/course.entity";
import { Class } from "src/models/class.entity";
// import { CookieAuthenticationGuard } from "src/service/cookieAuthentication.guard";
// import RequestWithUser from "src/service/requestWithUser.interface";

@Controller('registration')
export class RegistrationController{
    constructor(private courseService: CourseService, private userService: UserService) {}
    
    @Get(':id')
    @Render('registration/index')
    async index(@Param() params, @Req() req: Request) {
        const courseList = await this.courseService.getAllCourse();
        var courseTaken = await this.courseService.getOne(params.id);
        var classList = await this.courseService.getClass(courseTaken.coursename);
        console.log(classList);
        // var classTaken = await this.courseService.getOneClass(params.id);
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
    @UseGuards(AuthGuard('jwt'))
    async add(@Body() faculty:Class, @Res() res: Response, @Req() req: Request) {
        const userReturn = req["user"];
        var roc: RegistantOfClass = new RegistantOfClass();
        var user = await this.userService.getRegistant(userReturn.username);
        roc.registantID = user[0].ID;
        roc.feeSituation = "Chưa nộp học phí";
        roc.classID = faculty.ID;
        console.log(roc);
        await this.courseService.addClass(roc);
        res.redirect('/login/user'); 
        return{
            userReturn
        }   
    }    
}
    