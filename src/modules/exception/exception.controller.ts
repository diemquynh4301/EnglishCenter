import { Controller, Get, Res } from "@nestjs/common";
import {Response} from "express";

@Controller()
export class Exception {
    @Get('/403')
    async page403(@Res() res: Response) {
        res.send("403 page");

    }

    @Get('/401') 
    async page401(@Res() res: Response) {
        res.send("401");

    }
}