import TypeORMConnector from "@/database/connection/TypeOrmConnector";
import {
  FindOptionsRelations,
  FindOptionsSelect,
  ObjectLiteral,
} from "typeorm";

export default abstract class Dao<E extends ObjectLiteral> {
  private connector: TypeORMConnector;

  constructor() {
    this.connector = TypeORMConnector.getInstance();
  }

  protected getConnector(): TypeORMConnector {
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
