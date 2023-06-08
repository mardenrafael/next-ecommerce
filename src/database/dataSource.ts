import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./model/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(
    process.env.DATABASE_PORT ? process.env.DATABASE_PORT : "5432"
  ),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  // entities: ["./src/database/model/*.ts"],
  entities: [User],
  migrations: ["./src/database/migration/*.ts"],
  synchronize: true,
  logging: false,
});
