import PrismaConnector from "@/database/connection/PrismaConnector";

export default abstract class Dao<E> {
  private connector: PrismaConnector;

  constructor() {
    this.connector = PrismaConnector.getConnector();
  }

  protected getConnector(): PrismaConnector {
    return this.connector;
  }

  public abstract create(entity: E): Promise<E>;
  public abstract getById(id: string): Promise<E>;
  public abstract getBy(atribute: keyof E, value: E[keyof E]): Promise<E>;
}
