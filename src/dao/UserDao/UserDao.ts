import TypeORMConnector from "@/database/connection/TypeOrmConnector";
// import { AppDataSource } from "@/database/data-source";
import { User } from "@/database/model/User";
import NotFoundError from "@/errors/NotFoundError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { randomUUID } from "crypto";
import Dao from "../Dao";

export default class UserDao extends Dao<User> {
  constructor() {
    super();
  }

  public async create({ email, name, password, terms }: User): Promise<User> {
    const connector = TypeORMConnector.getInstance();

    try {
      await connector.establish();

      const appDataSource = connector.getDataSource();

      const uuid = randomUUID();
      const userRepository = appDataSource.getRepository(User);

      const user: User = new User();
      user.id = uuid;
      user.email = email;
      user.name = name;
      user.password = password;
      user.terms = terms;

      const savedUser = await userRepository.save(user);

      return savedUser;
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error("Database error");
      }

      throw error;
    } finally {
      await connector.close();
    }
  }

  public async getById(id: String): Promise<User> {
    try {
      // const userRepository = AppDataSource.getRepository(User);
      // const user = await userRepository.findOneBy({
      // id: Equal(id),
      // });

      // if (user == null) {
      //   throw new NotFoundError();
      // }
      return new User();
    } catch (error: unknown) {
      if (error instanceof NotFoundError) {
        throw new Error("Usuario não encontrado");
      }
      throw error;
    }
  }
  public async getBy(
    atribute: keyof User,
    value: string | boolean
  ): Promise<User> {
    try {
      const connector = super.getConnector();
      // // const prisma = connector.getPrismaclientInstance();

      // const user = await prisma.$queryRaw<User>`
      //     SELECT * FROM users
      //       WHERE 1 = 1
      //       AND email = ${value};`;

      // console.log(user);

      return new User();
    } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new Error("Data base error");
      }

      throw error;
    }
  }
}
