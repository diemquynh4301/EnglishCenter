import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Class } from "./class.entity";
import { Registant } from "./registant.entity";

@Entity()
export class RegistantOfClass {
    @PrimaryColumn()
    registantID: number;

    @PrimaryColumn()
    classID: string;

    @Column()
    feeSituation: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne((type) => Registant, { primary: true, cascade: true })
    @JoinColumn()
    registant: Registant;


    @ManyToOne((type) => Class, { primary: true, cascade: true })
    @JoinColumn()
    class: Class;


}