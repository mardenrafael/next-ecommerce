import ProductDao from "@/database/dao/ProductDao/ProductDao";
import Response from "@/http/Response";
import BadRequestError from "@/http/errors/BadRequestError";
import MethodNotAllowedError from "@/http/errors/MethodNotAllowedError";
import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface ProductResponse extends Response<Product> {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>,
): Promise<void> {
  try {
    res.setHeader("Content-Type", "application/json");

    const method = req.method;

    if (method !== "POST") {
      throw new MethodNotAllowedError();
    }

    const body = req.body;
    const query = req.query;
    console.log(query);

    Object.values(body).forEach(value => {
      if (value == undefined) {
        throw new BadRequestError();
      }

      if (value instanceof String) {
        if (value.trim() == "") {
          throw new BadRequestError();
        }
      }
    });

    if (query.userId == undefined || query.userId == "") {
      throw new BadRequestError();
    }

    const productPrice = parseInt(body.productPrice);

    if (isNaN(productPrice)) {
      throw new BadRequestError();
    }

    const productDao = new ProductDao();
    const product = await productDao.create({
      name: body.productName,
      price: productPrice,
      description: body.productDescription,
      userId: query.userId as string,
    });

    res.status(201);
    res.json({
      message: "Criado com sucesso",
      data: [product],
    });
  } catch (error: unknown) {
    if (error instanceof BadRequestError) {
      res.status(400);
      res.json({
        error: new BadRequestError(),
      });
    }

    if (error instanceof MethodNotAllowedError) {
      res.status(405);
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.json({
        error: new MethodNotAllowedError(),
      });
    }

    throw error;
  }
}
