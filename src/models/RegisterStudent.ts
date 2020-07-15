import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import Adresses from './Adresses';
import GroupExerciseStudent from './GroupExerciseStudent';

@Entity('register_student')
class RegisterStudent { 

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

    @OneToMany(type => Adresses, student => RegisterStudent, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    adress: Adresses[];

    @OneToMany(type => GroupExerciseStudent, student => RegisterStudent)
    groupExerciseStudent: GroupExerciseStudent[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default RegisterStudent;