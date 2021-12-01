// CREATE TABLE teacherdegree(
//     degreename VARCHAR(100),
//     degreedate DATE,
//     cmndorvisa BIGINT,
//     FOREIGN KEY (cmndorvisa) REFERENCES teacher(cmndorvisa) ON DELETE CASCADE ON UPDATE CASCADE,
//     PRIMARY KEY (degreename, degreedate, cmndorvisa)
//     ); 

import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import { Teacher } from "./teacher.entity";
import { User } from "./user.entity";
@Entity()
export class TeacherDegree {
    @PrimaryColumn()
    teacherCmndorvisa: number;

    @PrimaryColumn()
    degreedate: Date;

    @PrimaryColumn()
    degreename: string;

    @ManyToOne((type) => Teacher, { primary: true, cascade: true })
    @JoinColumn()
    teacher: Teacher;

}