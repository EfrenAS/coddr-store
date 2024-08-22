import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { HtttpResponse } from '../../shared/response/http.response';
import { UpdateResult } from 'typeorm';

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HtttpResponse = new HtttpResponse()
  ) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUsers();
      if (data.length === 0)
        return this.httpResponse.notFound(res, 'No existen datos');

      return this.httpResponse.ok(res, data);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this.userService.findUserById(id);

      if (!data) return this.httpResponse.notFound(res, 'El usuario no existe');

      return this.httpResponse.ok(res, data);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);

      return this.httpResponse.ok(res, data);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data: UpdateResult = await this.userService.updateUser(
        id,
        req.body
      );
      if (!data.affected)
        return this.httpResponse.notFound(
          res,
          'Hubo un error al tratar actualizar los datos del usuario'
        );

      return this.httpResponse.ok(res, data);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this.userService.deleteUser(id);
      if (!data.affected)
        return this.httpResponse.notFound(
          res,
          'Hubo un error al tratar de eliminar los datos del usuario'
        );
      return this.httpResponse.ok(res, data);
    } catch (e) {
      return this.httpResponse.serverError(res, e);
    }
  }
}
