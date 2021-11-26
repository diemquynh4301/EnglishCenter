import { Controller, Get, Render, UseGuards, Post, Req, Res, Body} from "@nestjs/common";
import { Request, Response } from 'express';
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "src/service/user.service";
import { User } from "src/models/user.entity";

@Controller('login')
export class AuthController {
    constructor(private userService: UserService) {}
    @Get()
    @Render('login/index')
    async loginPage(@Req() req: Request) {}

    @Post('/add')
    async add(@Body() user: User, @Res() res: Response) {
        await this.userService.add(user);
        return res.redirect('/course');   
    }    

    @Get('/register')
    @Render("login/add")
    async register() {
        return; 
    }

    @Post("/checkId")
    async checkId(@Body('username') username: string) {
        let user = await this.userService.getByUsername(username);
        if (!user) return {
            status: "NOT_FOUND"
        }

        return {
            user: "FOUND"
        }
    }


    @Post()
    @UseGuards(AuthGuard('local'))
    login(@Req() req: Request, @Res() res: Response) {
        return res.redirect('/course');
    }
}