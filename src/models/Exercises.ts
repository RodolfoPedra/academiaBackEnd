import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from 'typeorm';
import GroupExercises from './Group_Exercises';
import { type } from 'os';
import SpecsExercises from './Specs_Exercises';

@Entity('exercises')
class Exercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    })
    name_exercise: string;

    @Column()
    description_exercise: string;

    @ManyToOne(type => GroupExercises, exercise => Exercises, {eager: true})
    groupExercises: GroupExercises;

    @OneToMany(type => SpecsExercises, exercise => Exercises, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    specs: SpecsExercises[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default Exercises;