import { Entity,BaseEntity,Column ,PrimaryColumn,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { Client } from './Client';
import { Persons } from './utils/Persons';


@Entity('banker')
export class Banker extends Persons {



@Column({
    unique:true
})
employee_number: number;

@ManyToMany(
    ()=>Client
)
@JoinTable({
    name : "Bankers_clinets",
    joinColumn:{
        name:'banker',
        referencedColumnName:'id'
    },
    inverseJoinColumn:{
        name:'client',  
        referencedColumnName:'id'
    }
})
clients: Client[];




    
}