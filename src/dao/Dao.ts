import PrismaConnector from "@/database/connection/Prisma";

export default interface Dao<E> {
  connector: PrismaConnector;

  create(entity: E): Promise<E>;
  getById(id: string): Promise<E>;
}
