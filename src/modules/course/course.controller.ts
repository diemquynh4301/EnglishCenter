import { Request } from 'express';
import { Controller, Get, Render, UseGuards, Post, Req } from "@nestjs/common";
import { CourseService } from 'src/service/course.service';

@Controller('course')
export class CourseController{
    constructor(private courseService: CourseService) {}
    @Get()
    @Render('course/index')
    async index() {
        const courseList = await this.courseService.getAllCourse();
        const classList = await this.courseService.getAllClass();
        return {
            courseList: courseList,
            classList: classList
        }
    }

    
}