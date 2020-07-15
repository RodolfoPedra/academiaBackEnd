import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import Exercises from './Exercises';
import GroupExerciseStudent from './GroupExerciseStudent';

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

    @ManyToMany(type => Exercises, {cascade: true})
    @JoinTable()
    exercise: Exercises[];

    @OneToMany(type => GroupExerciseStudent, groupExercise => GroupExercises)
    groupExerciseStudent: GroupExerciseStudent[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default GroupExercises;