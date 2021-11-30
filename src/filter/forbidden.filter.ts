import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException } from "@nestjs/common";
import {Request, Response} from "express";

@Catch(ForbiddenException)
export class ForbiddenFilter implements ExceptionFilter {
    catch(exeption: ForbiddenException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const message = exeption.message;

        if (message == "Uninitialized user") response.redirect("/user/index");
        else {
            response.redirect("/403")
        }
    }
}