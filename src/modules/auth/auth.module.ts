import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registant } from 'src/models/registant.entity';
import { User } from 'src/models/user.entity';
import { UserService } from 'src/service/user.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [PassportModule, TypeOrmModule.forFeature([User, Registant])],
    providers: [UserService, LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule{}