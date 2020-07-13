import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from 'typeorm';
import Exercises from './Exercises';
import { type } from 'os';

@Entity('group_exercises')
class GroupExercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    }) 
    name_group: string

    @Column()
    description_group: string

    @OneToMany(type => Exercises, groupExercises => GroupExercises)
    exercise: Exercises[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default GroupExercises;