import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "src/models/class.entity";
import { Course } from "src/models/course.entity";
import { Repository } from "typeorm";

@Injectable()
export class CourseService{
    constructor(
        @InjectRepository(Course) private courseRepository: Repository<Course>,
        @InjectRepository(Class) private classRepository: Repository<Class>,
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

    async getClass(coursename: string): Promise<Class[]> {
      console.log(coursename);
      return await this.classRepository.query("SELECT * FROM class WHERE coursename = '"+coursename+"';");
    }

}