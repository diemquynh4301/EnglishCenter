import { Body, Controller, Get, Param, Post, Render, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/models/user.entity";
import { CourseService } from "src/service/course.service";
import { UserService } from "src/service/user.service";

@Controller('registration')
export class RegistrationController{
    constructor(private courseService: CourseService, private userService: UserService) {}
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @Render('registration/index')
    async index(@Param() params) {
        const courseList = await this.courseService.getAllCourse();
        const classList = await this.courseService.getAllClass();
        var courseTaken = await this.courseService.getOne(params.coursename);
        var classTaken = await this.courseService.getOneClass(params.id);
        console.log(classTaken);
        return {
            courseList: courseList,
            classList: classList,
            courseTaken,
            classTaken
        }
    }

    // async add(user: User): Promise<void> {
    //     await this.facultyRepository.update(faculty.id, faculty);
    // }

    // @Post('/add')
    // async add(@Body() user: User, @Body() registant: Registant, @Res() res: Response) {
    //     await this.userService.add(user);
    //     await this.userService.addRegistant(registant);
    //     return res.redirect('/course');   
    // }    
}
    