import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { CourseService } from 'src/service/course.service';


@Controller('home')
export class HomeController {
    constructor(private courseService: CourseService) {}
    @Get()
    @Render('index')
    async index() {
        const courseList = await this.courseService.getAllCourse();
        const classList = await this.courseService.getAllClass();
        return {
            courseList: courseList,
            classList: classList
        }
    }
}
