import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import BaseSpecsExercises from './BaseSpecsExercises';
import Exercises from './Exercises';

@Entity('specs_exercises')
class SpecsExercises extends BaseSpecsExercises { 

    @ManyToOne(type =>  Exercises, specs => specs.specs)
    exercise: Exercises;
}

export default SpecsExercises;