import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Branch {
    @PrimaryColumn()
    address: string;

    @Column()
    name: number;

    @Column()
    initialDay: Date;
}