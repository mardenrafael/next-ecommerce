import UserDao from "@/database/dao/UserDao/UserDao";
import BadRequestError from "@/http/errors/BadRequestError";
import InternalServerError from "@/http/errors/InternalServerError";
import MethodNotAllowedError from "@/http/errors/MethodNotAllowedError";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const method = req.method;
  res.setHeader("Content-Type", "application/json");

  if (method !== "GET") {
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.status(405);
    res.json({ error: new MethodNotAllowedError() });
    return;
  }

  const { email } = req.query;

  if (email == undefined) {
    throw new BadRequestError();
  }

  if (email instanceof Array) {
    throw new BadRequestError();
  }

  const userDao: UserDao = new UserDao();

  try {
    const user = await userDao.getBy("email", email);

    res.status(200);
    res.json({
      message: "Operação realizado com sucesso",
      data: [user],
    });
  } catch (e: unknown) {
    console.log(e);

    res.status(500);
    res.json({ error: new InternalServerError() });
    return;
  }
}
