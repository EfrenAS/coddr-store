import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';

import { UserRouter } from './user/user.router';
import { CustomerRouter } from './customer/customer.router';
import { CategoryRouter } from './category/category.router';

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT') || 8000;

  constructor() {
    super();
    this.app.disable('x-powered-by');
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Start to Database
    this.dbConnect();

    this.app.use(morgan('dev'));
    this.app.use(cors());

    // Routes
    this.app.use('/api', this.routers());
    this.listen();
  }

  private routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new CustomerRouter().router,
      new CategoryRouter().router
    ];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`);
    });
  }
}

new ServerBootstrap();
