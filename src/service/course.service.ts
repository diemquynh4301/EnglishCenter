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
    async getAllClass(): Promise<Class[]> {
        return await this.classRepository.find({
          relations: ["course"]
        });
      }

}