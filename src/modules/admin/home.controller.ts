import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { CourseService } from 'src/service/course.service';
import { UserService } from 'src/service/user.service';


@Controller('home')
export class HomeController {
    constructor(private courseService: CourseService, private userService: UserService) {}
    @Get()
    @Render('index')
    async index(@Param() params) {
        const courseList = await this.courseService.getAllCourse();
        const classList = await this.courseService.getAllClass();
        var user = await this.userService.getByUsername(params.id);
        // console.log(user);
        return {
            courseList: courseList,
            classList: classList,
            user
        }
    }
}
