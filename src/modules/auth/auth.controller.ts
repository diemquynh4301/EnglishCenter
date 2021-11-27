import { Controller, Get, Render, UseGuards, Post, Req, Res, Body} from "@nestjs/common";
import { Request, Response } from 'express';
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "src/service/user.service";
import { User } from "src/models/user.entity";
import { Registant } from "src/models/registant.entity";
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class AuthController {
    constructor(private userService: UserService,private jwtService: JwtService) {}
    @Get()
    @Render('login/index')
    async loginPage(@Req() req: Request) {}

    @Post()
    @UseGuards(AuthGuard('local'))
    login(@Req() req: Request, @Res() res: Response) {
        const user = req["user"];
        const accessToken = this.jwtService.sign(user);
        res.cookie('BKM', accessToken);
        return res.redirect('/course');
    }

    @Post('/add')
    async add(@Body() user: User, @Body() registant: Registant, @Res() res: Response) {
        await this.userService.add(user);
        await this.userService.addRegistant(registant);
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

    @Get('logout')
    async logout(@Req() req: Request, @Res() res: Response) {
        res.clearCookie('BKM');
        return res.redirect('/login');
    }
    
}