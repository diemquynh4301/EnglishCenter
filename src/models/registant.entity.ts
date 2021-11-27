import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

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

    @UpdateDateColumn()
    updatedAt: Date;

}
    
    