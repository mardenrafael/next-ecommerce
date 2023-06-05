import Response from "@/http/Response";
import UserDao from "@/dao/UserDao/UserDao";
import InternalServerError from "@/errors/InternalServerError";
import MethodNotAllowedError from "@/errors/MethodNotAllowedError";
import { NextApiRequest, NextApiResponse } from "next";

export interface RegisterResponse extends Response {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
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

    const body = req.body;
    const userDao: UserDao = new UserDao();

    const user = await userDao.create(body);

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
