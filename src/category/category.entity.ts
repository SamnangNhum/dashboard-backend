import { Entity , Column , PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn  } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    desc:string;

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    modified_at:Date;

    
}