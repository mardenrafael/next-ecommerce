import PrismaConnector from "@/database/connection/Prisma";
import NotFoundError from "@/errors/NotFoundError";
import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";
import Dao from "../Dao";

export default class UserDao implements Dao<User> {
  public connector: PrismaConnector;

  constructor() {
    this.connector = PrismaConnector.getConnector();
  }

  public async create({ email, name, password, terms }: User): Promise<User> {
    try {
      const prisma = this.connector.getPrismaclientInstance();

      const uuid = randomUUID();
      const cryptPassword = await bcrypt.hash(password, 12);

      const [user] = await prisma.$transaction([
        prisma.user.create({
          data: {
            id: uuid,
            name,
            email,
            password: cryptPassword,
            terms,
          },
        }),
      ]);

      return user;
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error("Database error");
      }

      throw error;
    }
  }

  public async getById(id: string): Promise<User> {
    try {
      const prisma = this.connector.getPrismaclientInstance();

      const [user] = await prisma.$transaction([
        prisma.user.findUniqueOrThrow({
          where: {
            id,
          },
        }),
      ]);

      return user;
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == "P2025") {
          throw new NotFoundError();
        }
      }
      throw error;
    }
  }
}
