import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';

abstract class BaseSpecsExercises { 

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

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default BaseSpecsExercises;