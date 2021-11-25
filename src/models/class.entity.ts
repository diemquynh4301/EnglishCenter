import { Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Branch } from "./branch.entity"
import { Course } from "./course.entity";
@Entity()
export class Class{
    @PrimaryColumn()
    ID: string;

    @Column()
    startday: Date;

    @Column()
    endday: Date;

    @Column()
    schedule: string;

    @ManyToOne(() => Course)
    @JoinTable()
    course: Course;

    @ManyToOne(() => Branch)
    @JoinTable()
    branch: Branch;
}