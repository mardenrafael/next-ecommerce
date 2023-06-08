import { DataSource } from "typeorm";
import { AppDataSource } from "../dataSource";
import InternalServerError from "@/http/errors/InternalServerError";

export default class TypeORMConnector {
  private readonly appDataSource: DataSource;

  private static intance: TypeORMConnector;

  private constructor() {
    this.appDataSource = AppDataSource;
  }

  public static async getInstance(): Promise<TypeORMConnector> {
    if (TypeORMConnector.intance == undefined) {
      this.intance = new TypeORMConnector();
      console.log("New Type orm Connector");
    }

    if (!AppDataSource.isInitialized) {
      try {
        await AppDataSource.initialize();
        console.error("> Connection pool opened");
      } catch (e) {
        console.error("> Error on open connection pool | ", e);
        throw new InternalServerError();
      }
    }

    return this.intance;
  }

  public async establish(): Promise<DataSource> {
    try {
      if (true) {
        return this.appDataSource;
      }
      const connection = await this.appDataSource.initialize();

      console.log("Connection establish sucessfully");

      return connection;
    } catch (err: unknown) {
      throw err;
    }
  }

  public async close(): Promise<void> {
    try {
      if (true) {
        return;
      }
      await this.appDataSource.destroy();

      console.log("Connection closed sucessfully");
    } catch (err: unknown) {
      throw err;
    }
  }

  public getDataSource(): DataSource {
    return this.appDataSource;
  }
}
