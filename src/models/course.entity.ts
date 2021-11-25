import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class Course{
    @PrimaryColumn()
    coursename: string;

    @Column()
    courselevel: string;

    @Column()
    input: string;

    @Column()
    output: string;

    @Column()
    formulation: string;

    @Column()
    fee: number;

    @Column()
    totaltime: number;
}