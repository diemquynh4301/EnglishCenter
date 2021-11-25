import { Controller, Get, Render, Req, Res } from '@nestjs/common';


@Controller('home')
export class HomeController {
    @Get()
    @Render ("index")
    index(){
        return; 
    }

}
