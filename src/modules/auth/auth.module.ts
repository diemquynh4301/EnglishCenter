import { Employee } from './../../models/employee.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registant } from 'src/models/registant.entity';
import { User } from 'src/models/user.entity';
import { UserService } from 'src/service/user.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RegistantOfClass } from 'src/models/registantOfClass.entity';
import { TeacherService } from 'src/service/teacher.service';
import { Teacher } from 'src/models/teacher.entity';

@Module({
    imports: [
        PassportModule,
        ConfigModule.forRoot(),
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: 60 * 30,
          },
        }),
        TypeOrmModule.forFeature([User, Registant, RegistantOfClass, Employee, Teacher]),
    ],
    providers: [UserService, LocalStrategy, TeacherService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule{}