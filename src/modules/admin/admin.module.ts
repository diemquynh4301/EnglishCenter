import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/models/class.entity';
import { Course } from 'src/models/course.entity';
import { Employee } from 'src/models/employee.entity';
import { LecturerOfClass } from 'src/models/lecturerOfClass.entity';
import { Registant } from 'src/models/registant.entity';
import { RegistantOfClass } from 'src/models/registantOfClass.entity';
import { Teacher } from 'src/models/teacher.entity';
import { User } from 'src/models/user.entity';
import { CourseService } from 'src/service/course.service';
import { TeacherService } from 'src/service/teacher.service';
import { UserService } from 'src/service/user.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { CourseController } from '../course/course.controller';
import { RegistrationController } from '../registration/registration.controller';
import { HomeController } from './home.controller';
import { TeacherController } from './teacher.controller';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Course, Class, Registant, RegistantOfClass, Employee, Teacher, LecturerOfClass])],
  providers: [UserService, CourseService, JwtStrategy, TeacherService],
  controllers: [HomeController, UserController, CourseController, RegistrationController, TeacherController],
})
export class AdminModule {}