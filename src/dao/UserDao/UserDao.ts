import { User } from "@/database/model/User";
import NotFoundError from "@/http/errors/NotFoundError";
import { randomUUID } from "crypto";
import Dao from "../Dao";
import {
  Equal,
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
} from "typeorm";
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
      await connector.establish();

      const appDataSource = connector.getDataSource();
      const userRepository = appDataSource.getRepository(User);

      const uuid = randomUUID();

      const salt = await genSalt(12);
      const hashedPassword = await hash(password, salt);

      const user: User = new User();
      user.id = uuid;
      user.email = email;
      user.name = name;
      user.password = hashedPassword;
      user.terms = terms;

      const savedUser = await userRepository.save(user);

      return savedUser;
    } catch (error: unknown) {
      console.error(error);

      throw error;
    } finally {
      await connector.close();
    }
  }

  public async getById(id: string): Promise<User> {
    const connector = super.getConnector();

    try {
      await connector.establish();

      const appDataSource = connector.getDataSource();
      const userRepository = appDataSource.getRepository(User);

      const userOrNull = await userRepository.findOne({
        where: {
          id: Equal(id),
        },
      });

      if (userOrNull == null) {
        throw new NotFoundError();
      }

      return userOrNull;
    } catch (error: unknown) {
      throw error;
    } finally {
      await connector.close();
    }
  }
  public async getBy(
    atribute: keyof User,
    value: string | boolean,
    join?: FindOptionsRelations<User>,
    select?: FindOptionsSelect<User>
  ): Promise<User[]> {
    const connector = super.getConnector();

    try {
      await connector.establish();

      const appDataSource = connector.getDataSource();
      const userRepository = appDataSource.getRepository(User);

      const findManyOptions: FindManyOptions = {
        where: {
          [atribute]: Equal(value),
        },
        select: {},
      };

      if (join != undefined) {
        findManyOptions.relations = join;
      }

      if (select != undefined) {
        findManyOptions.select = select;
      }

      const users = await userRepository.find(findManyOptions);

      return users;
    } catch (error: unknown) {
      throw error;
    } finally {
      connector.close();
    }
  }
}
