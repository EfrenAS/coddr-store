import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: "category" }) //Initiliazed the Customer Entity
export class CategoryEntity extends BaseEntity {
  @Column()
  name!: string;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products!: ProductEntity[];
}
