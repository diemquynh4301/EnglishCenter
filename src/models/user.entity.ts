import { UserRole } from "src/constant/user.constant";
import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    username: string;

    @Column()
    pass: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    fullname: string;

    @Column()
    gender: boolean;

    @Column({ default: UserRole.REGISTANT })
	role: number;
}


