import { Request } from 'express';
import { Controller, Get, Render, UseGuards, Post, Req, Param, Body } from "@nestjs/common";
import { CourseService } from 'src/service/course.service';
import { Course } from 'src/models/course.entity';

@Controller('course')
export class CourseController{
    constructor(private courseService: CourseService) {}
    @Get()
    @Render('course/index')
    async index(@Body() course: Course) {
        const courseList = await this.courseService.getAllCourse();
        return {
            courseList: courseList
        }
    }


    
}