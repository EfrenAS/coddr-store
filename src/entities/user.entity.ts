import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";


@Entity({ name: "user" })  //Initiliazed the User Entity
export class UserEntity extends BaseEntity {
  
  @Column()
  username!: string;
  
  @Column({length: 20})
  name!: string;

  @Column()  
  lastname!: string;
  
  @Column({ nullable: true })
  jobPosition?: string;
  
  @Column()
  phone!: number;
}