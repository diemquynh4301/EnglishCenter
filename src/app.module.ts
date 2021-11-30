import { Module, UnauthorizedException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ForbiddenFilter } from './filter/forbidden.filter';
import { UnauthorizedExceptionFilter } from './filter/unauthorized-exception.filter';
import { AdminModule } from './modules/admin/admin.module';
import { HomeController } from './modules/admin/home.controller';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { LocalStrategy } from './modules/auth/local.strategy';
import { CourseController } from './modules/course/course.controller';
import { ExceptionModule } from './modules/exception/exception.module';
import { UserService } from './service/user.service';

@Module({
  imports: [
    AdminModule, 
    AuthModule,
    ExceptionModule,
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ForbiddenFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnauthorizedExceptionFilter,
    },
  ]
  
})
export class AppModule {}
