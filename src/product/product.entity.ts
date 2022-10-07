import { Entity , Column , PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn  } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    desc:string;

    @Column()
    sku:string;

    @Column()
    price:number;

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    modified_at:Date;

}