import { Controller, Get, Render, UseGuards, Post, Req, Res, Body} from "@nestjs/common";
import { Request, Response } from 'express';
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "src/service/user.service";
import { User } from "src/models/user.entity";

@Controller('login')
export class AuthController {
    constructor(private userService: UserService) {}
    @Get()
    @Render("login/index")
    async loginPage() {

    }

    @Get('/add')
    @Render("login/add")
    async add(@Body() user: User, @Res() res: Response) {
        await this.userService.add(user);
        return res.redirect('/course');   
    }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    login(@Req() req: Request, @Res() res: Response) {
        return res.redirect('/course');
    }
}