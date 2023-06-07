import TypeORMConnector from "@/database/connection/TypeOrmConnector";

export default abstract class Dao<E> {
  private connector: TypeORMConnector;

  constructor() {
    this.connector = TypeORMConnector.getInstance();
  }

  protected getConnector(): TypeORMConnector {
    return this.connector;
  }

  public abstract create(entity: E): Promise<E>;
  public abstract getById(id: string): Promise<E>;
  public abstract getBy(atribute: keyof E, value: E[keyof E]): Promise<E>;
}
