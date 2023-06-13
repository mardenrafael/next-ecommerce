import { Product } from "@prisma/client";
import { randomUUID } from "crypto";
import Dao from "../Dao";

export default class ProductDao extends Dao<Product> {
  public async create({
    name,
    price,
    description,
    userId,
  }: Omit<Product, "id">): Promise<Product> {
    const connector = super.getConnector();
    const prisma = connector.getPrisma();

    const uuid = randomUUID();

    const [product] = await prisma.$transaction([
      prisma.product.create({
        data: {
          id: uuid,
          name,
          price,
          description,
          userId,
        },
      }),
    ]);

    return product;
  }
  public getById(id: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
