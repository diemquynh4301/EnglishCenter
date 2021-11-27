import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/models/class.entity';
import { Course } from 'src/models/course.entity';
import { Registant } from 'src/models/registant.entity';
import { User } from 'src/models/user.entity';
import { CourseService } from 'src/service/course.service';
import { UserService } from 'src/service/user.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { CourseController } from '../course/course.controller';
import { RegistrationController } from '../registration/registration.controller';
import { HomeController } from './home.controller';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Course, Class, Registant])],
  providers: [UserService, CourseService, JwtStrategy],
  controllers: [HomeController, UserController, CourseController, RegistrationController],
})
export class AdminModule {}