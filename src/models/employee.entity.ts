import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import { Branch } from "./branch.entity";
import { User } from "./user.entity";
    @Entity()
    export class Employee {
        @PrimaryColumn()
        cmndorvisa: number;

        @Column()
        username: string;
    
        @Column()
        position: string;
    
        @ManyToOne(() => Branch)
        @JoinTable()
        branch: Branch;

        @OneToOne(() => User)
        @JoinColumn({ name: 'username' })
        user: User;
    }