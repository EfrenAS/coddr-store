import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

@Entity({ name: "customer" }) //Initiliazed the Customer Entity
export class CustomerEntity extends BaseEntity {
  @Column()
  address!: string;

  @Column()
  dni!: number;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchases!: PurchaseEntity[];
}


// Hola este es un cambio de ejemplo