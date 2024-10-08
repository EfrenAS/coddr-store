import { Column, Entity, OneToOne, Exclusion } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Entity({ name: 'user' }) //Initiliazed the User Entity
export class UserEntity extends BaseEntity {
  @Column({ length: 20 })
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  city!: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
