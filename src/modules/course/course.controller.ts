import { Request } from 'express';
import { Controller, Get, Render, UseGuards, Post, Req, Param, Body } from "@nestjs/common";
import { CourseService } from 'src/service/course.service';
import { Course } from 'src/models/course.entity';
import { TeacherService } from 'src/service/teacher.service';

@Controller('course')
export class CourseController{
    constructor(private courseService: CourseService, private teacherService: TeacherService) {}
    @Get()
    @Render('course/index')
    async index(@Body() course: Course) {
        const courseList = await this.courseService.getAllCourse();
        const teacherList = await this.teacherService.getAllTeacher();
        return {
            courseList: courseList,
            teacherList: teacherList
        }
    }


    
}