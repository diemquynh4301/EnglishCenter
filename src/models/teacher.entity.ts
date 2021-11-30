
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import { User } from "./user.entity";
@Entity()
export class Teacher {
    @PrimaryColumn()
    cmndorvisa: number;

    @Column()
    username: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'username' })
    user: User;
}