import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Teacher } from "src/models/teacher.entity";
import { Repository } from "typeorm";

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
      ) {}
    async getClass(username: string): Promise<[]>{
        return this.teacherRepository.query(
            "SELECT * FROM class C, registant R, user U, registant_of_class O WHERE C.ID=O.classID AND U.username=R.username AND R.ID=O.registantID AND O.classID IN (SELECT classID FROM lecturer_of_class L, teacher T WHERE teacherCmndorvisa=T.cmndorvisa AND T.username='"+username+"')"
        );
    }

    async getTeacher(username: string):Promise<[]>{
        return this.teacherRepository.query(
            "SELECT * FROM teacher WHERE username='"+username+"'"
        );
    }
    async getUser(username: string): Promise<Teacher>{
        return await this.teacherRepository.query(
          "SELECT * FROM user WHERE username = '"+username+"';"
          )
      }
}
//  