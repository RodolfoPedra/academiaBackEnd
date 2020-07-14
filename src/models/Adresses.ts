import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import Register_Student from './RegisterStudent';

@Entity('adresses')
class Adresses { 

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cep: string

    @Column()
    city: string;

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
    number: string;

    @Column()
    email: string

    @ManyToOne(type => Register_Student, adress => Adresses)
    student: Register_Student;

    @CreateDateColumn({name: 'created_At'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt: Date;
}

export default Adresses;