import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv: string = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv
    });
  }

  //Example process.env['PORT']

  public getEnviroment(k: string): string | undefined {
    return process.env[k];
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnviroment(k));
  }

  /**
   *  get => Force the method to return something, in this case retunr a value of type string
   */
  public get nodeEnv(): string {
    return this.getEnviroment('NODE_ENV')?.trim() || '';
  }

  public createPathEnv(path: string): string {
    const arrEnv: Array<string> = ['env'];
    if (path.length > 0) {
      const stringToArray: string[] = path.split('.');
      arrEnv.unshift(...stringToArray);
    }
    return '.' + arrEnv.join('.');
  }

  // Stablished the DB parameters to connection
  public get typeORMConfig(): DataSourceOptions {
    return {
      type: 'mysql',
      host: this.getEnviroment('DB_HOST'),
      port: this.getNumberEnv('DB_PORT'),
      username: this.getEnviroment('DB_USERNAME'),
      password: this.getEnviroment('DB_PASSWORD'),
      database: this.getEnviroment('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Defined the any route that containt all entities files
      migrations: [__dirname + '/../../migrations/*{.ts, .js}'], // Same to entities, defined the route for read all migrations
      synchronize: false,
      logging: false,
      namingStrategy: new SnakeNamingStrategy() //Save the attributes on DB with the camecase style, xample: userId => user_id
    };
  }

  async dbConnect(): Promise<DataSource> {
    return await new DataSource(this.typeORMConfig).initialize();
  }
}
