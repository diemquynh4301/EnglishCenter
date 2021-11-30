import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Class } from "./class.entity";
import { Registant } from "./registant.entity";
import { Teacher } from "./teacher.entity";

@Entity()
export class LecturerOfClass {
    @PrimaryColumn()
    teacherCmndorvisa: number;

    @PrimaryColumn()
    classID: string;

    @ManyToOne((type) => Teacher, { primary: true, cascade: true })
    @JoinColumn()
    teacher: Teacher;


    @ManyToOne((type) => Class, { primary: true, cascade: true })
    @JoinColumn()
    class: Class;


}