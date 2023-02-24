import { Entity,BaseEntity,Column ,PrimaryColumn,CreateDateColumn,UpdateDateColumn , PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Persons extends BaseEntity {

// @PrimaryColumn({
//    type:"numeric"
// })
@PrimaryGeneratedColumn('increment')
id: number

@Column()    
first_name: string;

@Column({
    nullable:true
})    
middle_name: string;

@Column()
last_name: string;

@Column({
    unique:true
})
email: string;

@Column({
    unique:true,
    length:10
})
card_number: string;





@CreateDateColumn()
created_at:Date;

@UpdateDateColumn()
updated_at:Date;
    
}