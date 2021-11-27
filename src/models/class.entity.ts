import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
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

    @Column()
    coursename:string;

    @Column()
    branchAddress:string;

    @ManyToOne(() => Course, {cascade: true })
    @JoinColumn({ name: 'coursename' })
    course: Course;

    @ManyToOne(() => Branch)
    @JoinColumn({ name: 'branchAddress' })
    branch: Branch;
}