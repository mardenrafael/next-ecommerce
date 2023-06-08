import NotFoundError from "@/http/errors/NotFoundError";
import { randomUUID } from "crypto";
import Dao from "../Dao";

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
  }: Omit<User, "id">): Promise<User> {
    const connector = super.getConnector();

    try {
      const uuid = randomUUID();

      const salt = await genSalt(12);
      const hashedPassword = await hash(password, salt);

      const user: User = new User();
      user.id = uuid;
      user.email = email;
      user.name = name;
      user.password = hashedPassword;
      user.terms = terms;

      // return savedUser;
    } catch (error: unknown) {
      console.error(error);

      throw error;
    }
  }

  public async getById(id: string): Promise<User> {
    const connector = super.getConnector();

    try {
      // return userOrNull;
    } catch (error: unknown) {
      throw error;
    }
  }
}
