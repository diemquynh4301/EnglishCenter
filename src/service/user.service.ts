import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
      constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
      ) {}
      async getAll(): Promise<User[]> {
        return await this.userRepository.find();
      }
      async getOne(username: string): Promise<User> {
        return await this.userRepository.findOne(username);
      }
    
      async add(user: User): Promise<void> {
        await this.userRepository.insert(user);
      }
}