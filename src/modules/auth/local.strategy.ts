import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/service/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService) {
        super({
            usernameField: 'username'
        });
    }
    // Authentication: Xác thực
    // Authorization: Xác minh
    async validate(username: string, password: string) {
        const user = await this.userService.getOne(username);
        if (!user) throw new UnauthorizedException("Không tồn tại tài khoản này");
        if (user.pass != password) throw new UnauthorizedException("Sai tài khoản hoặc mật khẩu");
        return {
            username: user.username
        };
    }
}