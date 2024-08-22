import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { Exclude } from 'class-transformer';

export class userDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  lastname!: string;

  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  email!: string;

  @Exclude()
  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  city!: string;
}
