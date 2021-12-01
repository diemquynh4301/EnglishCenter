import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "src/models/class.entity";
import { Course } from "src/models/course.entity";
import { RegistantOfClass } from "src/models/registantOfClass.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseService{
    constructor(
        @InjectRepository(Course) private courseRepository: Repository<Course>,
        @InjectRepository(Class) private classRepository: Repository<Class>,
        @InjectRepository(RegistantOfClass) private rocRepository: Repository<RegistantOfClass>,
      ) {}

    async getAllCourse(): Promise<Course[]> {
      return await this.courseRepository.find();
    }

    async getOne(coursename: string): Promise<Course> {
      return await this.courseRepository.findOne(coursename);
    }

    async getOneClass(ID: string): Promise<Class> {
      return await this.classRepository.findOne(ID);
    }

    async getAllClass(): Promise<Class[]> {
      return await this.classRepository.find({
        relations: ["branch"]
      });
    }

    async getClass(coursename: string): Promise<[]> {
      return await this.classRepository.query(
        "SELECT * FROM class C, lecturer_of_class L, teacher T, user U WHERE teacherCmndorvisa=cmndorvisa AND U.username=T.username AND C.ID=L.classID AND coursename = '"+coursename+"';");
    }

    async addClass(roc: RegistantOfClass): Promise<void>{
      await this.rocRepository.insert(roc);
    }


}