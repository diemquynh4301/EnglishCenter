import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { HomeController } from './modules/admin/home.controller';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { LocalStrategy } from './modules/auth/local.strategy';
import { CourseController } from './modules/course/course.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [
    AdminModule, 
    AuthModule,
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot(),
  ],
  
})
export class AppModule {}
