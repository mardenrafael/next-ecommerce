import PrismaConnector from "@/database/connector/PrismaConnector";

export default abstract class Dao<E> {
  private connector?: PrismaConnector;

  constructor() {}

  protected getConnector(): PrismaConnector {
    if (this.connector == undefined) {
      this.connector = PrismaConnector.getInstance();
    }

    return this.connector;
  }

  public abstract create(entity: E): Promise<E>;
  public abstract getById(id: string): Promise<E>;
}
