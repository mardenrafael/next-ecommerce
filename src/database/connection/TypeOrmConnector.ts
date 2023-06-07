import { DataSource } from "typeorm";
import { User } from "../model/User";

export default class TypeORMConnector {
  private readonly appDataSource: DataSource;
  private isConnected: boolean;
  private static intance: TypeORMConnector;

  private constructor() {
    this.appDataSource = new DataSource({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT!),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User],
      synchronize: true,
      logging: false,
    });
    this.isConnected = false;
  }

  public static getInstance(): TypeORMConnector {
    if (TypeORMConnector.intance == undefined) {
      this.intance = new TypeORMConnector();
      console.log("New Type orm Connector");
      return this.intance;
    }

    return this.intance;
  }

  public async establish(): Promise<DataSource> {
    try {
      if (this.isConnected) {
        return this.appDataSource;
      }
      const connection = await this.appDataSource.initialize();

      this.isConnected = true;
      console.log("Connection establish sucessfully");

      return connection;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async close(): Promise<void> {
    try {
      if (!this.isConnected) {
        return;
      }
      await this.appDataSource.destroy();
      this.isConnected = false;

      console.log("Connection closed sucessfully");
    } catch (err: unknown) {
      throw err;
    }
  }

  public getDataSource(): DataSource {
    return this.appDataSource;
  }
}
