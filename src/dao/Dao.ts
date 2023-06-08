import TypeORMConnector from "@/database/connector/TypeOrmConnector";
import {
  FindOptionsRelations,
  FindOptionsSelect,
  ObjectLiteral,
} from "typeorm";

export default abstract class Dao<E extends ObjectLiteral> {
  private connector?: TypeORMConnector;

  constructor() {}

  protected async getConnector(): Promise<TypeORMConnector> {
    if (this.connector == undefined) {
      this.connector = await TypeORMConnector.getInstance();
    }

    return this.connector;
  }

  public abstract create(entity: E): Promise<E>;
  public abstract getById(id: string): Promise<E>;
  public abstract getBy(
    atribute: keyof E,
    value: E[keyof E],
    join?: FindOptionsRelations<E>,
    select?: FindOptionsSelect<E>
  ): Promise<E[] | E>;
}
