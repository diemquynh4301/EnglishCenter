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
        TypeOrmModule.forFeature([User, Registant, RegistantOfClass]),
    ],
    providers: [UserService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule{}