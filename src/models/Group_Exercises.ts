import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToMany, JoinTable} from 'typeorm';
import Exercises from './Exercises';

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

    @ManyToMany(type => Exercises)
    @JoinTable()
    exercise: Exercises[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default GroupExercises;