import NotFoundError from "@/errors/NotFoundError";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import Dao from "../Dao";
import { User } from "@prisma/client";

export default class UserDao extends Dao<User> {
  constructor() {
    super();
  }

  public async create({ email, name, password, terms }: User): Promise<User> {
    try {
      const connector = super.getConnector();
      const prisma = connector.getPrismaclientInstance();

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
      const connector = super.getConnector();
      const prisma = connector.getPrismaclientInstance();

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
