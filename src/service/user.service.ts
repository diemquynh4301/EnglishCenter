import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "src/models/employee.entity";
import { Registant } from "src/models/registant.entity";
import { RegistantOfClass } from "src/models/registantOfClass.entity";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
      constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Registant) private registantRepository: Repository<Registant>,
        @InjectRepository(RegistantOfClass) private rocRepository: Repository<RegistantOfClass>,
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
      ) {}
      async getAll(): Promise<any> {
        return await this.userRepository.query("SELECT * FROM registant R, user U WHERE R.username = U.username");
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

      async getClass(user: any): Promise<any> {
        return this.rocRepository.query(
          "SELECT classID, O.createdAt, startday, endday, schedule, coursename, branchAddress FROM registant_of_class O, registant R, class C WHERE registantID = R.ID AND R.username = '"+user+"' AND classID = C.ID"
          );
      }
      
      async getEmployee(username: string): Promise<[]> {
        return this.rocRepository.query("SELECT * FROM employee WHERE username='"+username+"'");
        // return this.employeeRepository.findOne(username);
      }


      async updateRole(username: string, role: number): Promise<void>{
        return this.userRepository.query("UPDATE user SET role = '"+role+"' WHERE username='"+username+"'")
      }

     
      async updateConfirm(username: string): Promise<void>{
        this.registantRepository.query("UPDATE registant SET confirmSituation= 'Đã xác nhận' WHERE username='"+username+"'")
      }

      async getAllStudent(): Promise<[]>{
        return this.rocRepository.query(
          "SELECT * FROM registant_of_class O, class C, registant R, user U WHERE C.ID = classID AND R.ID=registantID AND U.username=R.username" )
      }
      async updateFee(registantID: number, classID: string): Promise<void>{
        this.rocRepository.query(
          "UPDATE registant_of_class SET feeSituation= 'Đã hoàn thành' WHERE registantID='"+registantID+"' AND classID='"+classID+"'")
      }
}