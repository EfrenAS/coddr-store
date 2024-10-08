import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ProductEntity } from '../../product/entities/product.entity';

@Entity({ name: 'category' }) //Initiliazed the Customer Entity
export class CategoryEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  description!: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products!: ProductEntity[];
}
