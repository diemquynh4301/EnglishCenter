
import { Response } from "express";
import { Request } from "express";
import {
	Injectable,
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { UserRole } from "src/constant/user.constant";
@Injectable()
export class InitGuard implements CanActivate {
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request: Request = context.switchToHttp().getRequest();
		const response: Response = context.switchToHttp().getResponse();
		
		response.locals["user"] = request;
		response.locals["UserRole"] = UserRole;
		
		return true;
	}
}
