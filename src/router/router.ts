import { Router } from "express";

// T => A generic router
// U => A generic middleware

export class BaseRouter<T> {
  public router: Router;
  protected controller: T;
  //protected middleware: U

  constructor(TController: {new (): T}) {
    this.router = Router();
    this.controller = new TController()
    this.routes();
  }

  protected routes(){}
}