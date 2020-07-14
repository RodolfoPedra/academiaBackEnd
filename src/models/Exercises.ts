import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from 'typeorm';
import GroupExercises from './GroupExercises';
import SpecsExercises from './SpecsExercises';
import SpecsExercisesStudent from './SpecsExercisesStudent';

@Entity('exercises')
class Exercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    name_exercise: string;

    @Column()
    description_exercise: string;

    @OneToMany(type => SpecsExercises, exercise => Exercises, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    specs: SpecsExercises[];

    @OneToMany(type => SpecsExercisesStudent, exercise => Exercises, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    specsStudent: SpecsExercisesStudent[];

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default Exercises;