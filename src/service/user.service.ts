import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registant } from "src/models/registant.entity";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
      constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Registant) private registantRepository: Repository<Registant>
      ) {}
      async getAll(): Promise<User[]> {
        return await this.userRepository.find();
      }
    
      async add(user: User): Promise<void> {
        await this.userRepository.insert(user);
      }

      async addRegistant(registant: Registant): Promise<void> {
        await this.registantRepository.insert(registant);
      }
      
      async getUser(username: string): Promise<Registant>{
        return await this.userRepository.query(
          "SELECT * FROM user WHERE username = '"+username+"';"
          )
      }

      async getRegistant(username: string): Promise<Registant>{
        return await this.registantRepository.query(
          "SELECT * FROM registant WHERE username = '"+username+"';"
          )
      }

      async getByUsername(username): Promise<User> {
        return await this.userRepository.findOne(username);
      
      }
      async edit(user: any): Promise<void> {
        await this.userRepository.query("UPDATE user SET fullname = '"+user.name+"', gender='"+user.gender+"', email='"+user.email+"', phone='"+user.phone+"' WHERE username='"+user.id+"'");
      }
}