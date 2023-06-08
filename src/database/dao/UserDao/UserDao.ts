import { randomUUID } from "crypto";
import Dao from "../Dao";

import { User } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";
import NotFoundError from "@/http/errors/NotFoundError";

export default class UserDao extends Dao<User> {
  constructor() {
    super();
  }

  public async create({
    email,
    name,
    password,
    terms,
  }: Omit<User, "id">): Promise<User> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();

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
      }),
    ]);
    return savedUser;
  }

  public async getById(id: string): Promise<User> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();
    const userOrNull = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (userOrNull == null) {
      throw new NotFoundError();
    }
    return userOrNull;
  }

  public async getByEmail(email: string): Promise<User> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();

    const userOrNull = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userOrNull == null) {
      throw new NotFoundError();
    }

    return userOrNull;
  }
}
