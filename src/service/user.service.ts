import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registant } from "src/models/registant.entity";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
      constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Registant) private registantRepository: Repository<Registant>,
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

      async addRegistant(registant: Registant): Promise<void> {
        await this.registantRepository.insert(registant);
      }


      async getByUsername(username): Promise<User> {
        return await this.userRepository.findOne(username);
    }
}