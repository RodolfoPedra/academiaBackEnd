import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import Exercises from './Exercises';

@Entity('specs_exercises')
class SpecsExercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    })
    name_specs: string

    @Column()
    description_spec: string

    @Column({
        nullable: false
    })
    serie: number;

    @Column({
        nullable: false
    })
    repetition: number;

    @Column({
        nullable: false
    })
    charge: number;

    @Column()
    observation: string;

    @ManyToOne(type =>  Exercises, specs => SpecsExercises)
    exercise: Exercises;

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default SpecsExercises;