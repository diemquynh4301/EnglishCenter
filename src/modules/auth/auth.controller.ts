import { Request } from 'express';
import { Controller, Get, Render, UseGuards, Post, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AuthController {
    @Get('login')
    @Render("login/index")
    async loginPage() {

    }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    login(@Req() req: Request) {
        return 'success';
    }
}