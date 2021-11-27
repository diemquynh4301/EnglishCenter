import { Column, CreateDateColumn, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Employee } from "./employee.entity";
import { User } from "./user.entity";

@Entity()
export class Registant {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    username: string;

    @Column()
    cmndorvisaofEmployee: string;

    @Column()
    confirmSituation: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
    