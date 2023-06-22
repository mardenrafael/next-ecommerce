import UserDao from "@/database/dao/UserDao/UserDao";
import InternalServerError from "@/http/errors/InternalServerError";
import MethodNotAllowedError from "@/http/errors/MethodNotAllowedError";
import Response from "@/http/Response";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface RegisterResponse extends Response<User | { token: string }> {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>,
): Promise<void> {
  try {
    const method = req.method;
    res.setHeader("Content-Type", "application/json");

    if (method !== "POST") {
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.status(405);
      res.json({ error: new MethodNotAllowedError() });
      return;
    }

    const { name, email, password, terms }: User = req.body;
    const userDao: UserDao = new UserDao();

    const user = await userDao.create({
      name,
      email,
      password,
      terms,
    });

    res.status(200);
    res.json({
      message: "Realizado com sucesso",
      data: [user],
    });
  } catch (e: unknown) {
    console.log(e);

    res.status(500);
    res.json({ error: new InternalServerError() });
    return;
  }
}
