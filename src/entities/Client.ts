import { Entity,BaseEntity,Column , OneToMany , PrimaryColumn,CreateDateColumn,UpdateDateColumn, JoinColumn, ManyToMany } from 'typeorm'
import { Banker } from './Banker';
import { Transactions } from './Transctions';
import { Persons } from './utils/Persons';


@Entity('client')
export class Client extends Persons {




@Column({
    type: "numeric"
})
balance: number;

@Column({
    default:true,
    name:"active"
})
is_active: boolean;

@Column({
    type:"simple-json",
    nullable:true
})
additional_info:{
    age:number,
    hair_color:string
}

@Column({
    type:"simple-array",
    nullable:true
})
family_member:string[]

@OneToMany(
    ()=>Transactions,
    transaction=>transaction.client
)
transactions: Transactions[]

@ManyToMany(
    ()=>Banker 
)
bankers:Banker[]


    
}