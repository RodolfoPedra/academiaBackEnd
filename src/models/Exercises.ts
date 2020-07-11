import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from 'typeorm';
import GroupExercises from './Group_Exercises';
import { type } from 'os';

@Entity('exercises')
export default class Exercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    })
    name_exercise: string

    @Column()
    description_exercise: string

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;

    @OneToMany(type => GroupExercises, groupExercises => groupExercises.id)
    id_group_exercises: GroupExercises;
}
