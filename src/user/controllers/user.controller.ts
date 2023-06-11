import { Request, Response } from "express";

export class UserController {
  public getUsers(req: Request, res: Response):void {
    res.status(200).json({
      user: "Efren Anastacio",
    });
  }
}
