import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DeleteDateColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({ default: 'user' })
    rol: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
