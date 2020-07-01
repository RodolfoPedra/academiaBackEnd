import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('register_student')
class SpecsExercises { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        nullable: false
    })
    name: string

    @Column()
    responsible: string

    @Column({
        nullable: false
    })
    age: number;

    @Column()
    databirth: Date;

    @Column()
    cep: string

    @Column({
        nullable: false
    })
    neighborhood: string

    @Column({
        nullable: false
    })
    street: string

    @Column({
        nullable: false
    })
    number: number;

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

    @Column({
        nullable: false
    })
    charge: number;

    @Column()
    observation: string

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default SpecsExercises;