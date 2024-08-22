import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';

export class CustomerDTO extends BaseDTO {
  @IsNotEmpty()
  dni!: number;

  @IsNotEmpty()
  address!: string;

  @IsNotEmpty()
  user_id!: string;
}
