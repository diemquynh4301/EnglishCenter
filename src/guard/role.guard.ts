  import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
  import {Response} from 'express';
  import { Reflector } from '@nestjs/core';
  import { UserRole } from 'src/constant/user.constant';
  import {Request} from 'express';
  import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

  @Injectable()
  export class RolesGuard implements CanActivate {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private reflector: Reflector
  ) {}
  async getRole(username: string): Promise<User>{
    return this.userRepository.findOne(username);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const roles = this.reflector.getAllAndOverride<UserRole[]>(
        ROLES_KEY, 
        [context.getHandler(), context.getClass()]
    );
    
    if (!roles) {
      return true;
    }
    // console.log(roles);
    const user = request["user"];
    // response.locals["user"] = user;
    // response.locals["UserRole"] = UserRole;
    var R = await this.getRole(user.username);
    // console.log(R.role);
    return roles.some((role)=> R.role == role);

    
  }
  }