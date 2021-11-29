import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
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

    @OneToOne(() => Registant, { primary: true, cascade: true })
    @JoinColumn({ name: 'registantID' })
    registant: Registant;


    @OneToOne(() => Class, { primary: true, cascade: true })
    @JoinColumn({ name: 'classID' })
    class: Class;


}