import { randomUUID } from "crypto";
import Dao from "../Dao";

import { User } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

export default class UserDao extends Dao<User> {
  constructor() {
    super();
  }

  public async create({
    email,
    name,
    password,
    terms,
  }: Omit<User, "id">): Promise<Omit<User, "password">> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();

    try {
      const uuid = randomUUID();

      const salt = await genSalt(12);
      const hashedPassword = await hash(password, salt);

      const [savedUser] = await prisma.$transaction([
        prisma.user.create({
          data: {
            id: uuid,
            email,
            name,
            password: hashedPassword,
            terms,
          },
          select: {
            email: true,
            id: true,
            name: true,
            terms: true,
          },
        }),
      ]);
      return savedUser;
    } catch (error: unknown) {
      console.error(error);

      throw error;
    }
  }

  public async getById(id: string): Promise<Omit<User, "password">> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          email: true,
          id: true,
          name: true,
          terms: true,
        },
      });

      if (user == null) {
        throw new Error();
      }
      return user;
    } catch (error: unknown) {
      throw error;
    }
  }
}
