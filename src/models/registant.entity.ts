import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Registant {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    username: string;

    @Column()
    cmndorvisa: number;

    @Column()
    confirmSituation: string;

    @ManyToOne(() => Employee)
    @JoinColumn({name:'cmndorvisa'})
    employee: Employee;

    @UpdateDateColumn()
    updatedAt: Date;

}
    
    