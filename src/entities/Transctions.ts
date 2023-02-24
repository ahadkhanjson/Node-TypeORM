
import { Entity, Column ,BaseEntity, PrimaryColumn ,PrimaryGeneratedColumn, ManyToOne, JoinColumn  } from 'typeorm'
import { Client } from './Client';

export enum TransactionTypes {
    DEPOSIT = 'deposit',
    WITHDRAW= 'withd raw',
}

@Entity("transactions")
export class Transactions extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        

    })
    type:string;


    @Column({
        type:'numeric'
    })
    amount:number;

    @ManyToOne(

        ()=> Client,
        client => client.transactions

    )
    @JoinColumn({
        name : 'clinet_id'
    })

    client : Client



}
