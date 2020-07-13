import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import Adresses from './Adresses';
import { type } from 'os';

@Entity('register_student')
class Register_Student { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    age: number;

    @Column()
    responsible: string;

    @Column({
        nullable: false
    })
    ageResponsible: number;

    @Column()
    databirth: Date;

    @Column()
    email: string

    @Column({
        nullable: false
    })
    cellphone: string

    @Column({
        nullable: false
    })
    nameEmergency: string

    @Column({
        nullable: false
    })
    cellphoneEmergency: string

    @Column()
    observation: string

    @OneToMany(type => Adresses, student => Register_Student, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    adress: Adresses[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default Register_Student;