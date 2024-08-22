import { IsEmpty, IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';

export class CategoryDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;

  @IsEmpty()
  description!: string;
}
