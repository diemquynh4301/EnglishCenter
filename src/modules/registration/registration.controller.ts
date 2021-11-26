import { Controller, Get, Render } from "@nestjs/common";

@Controller('registration')
export class RegistrationController{
    // constructor(private courseService: CourseService) {}
    @Get()
    @Render('registration/index')
    async index() {}
        
    }