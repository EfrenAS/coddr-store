import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { userDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async findAllUser(): Promise<UserEntity[]> {
    return (await this.execRepository).find();
  }

  async findUserById(id: string): Promise<UserEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async createUser(body: userDTO): Promise<UserEntity> {
    return (await this.execRepository).save(body);
  }

  async updateUser(id: string, dataUpdated: userDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, dataUpdated);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
}
