import Response from "@/http/Response";
import UserDao from "@/dao/UserDao/UserDao";
import MethodNotAllowedError from "@/errors/MethodNotAllowedError";
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface LoginResponse extends Response {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
): Promise<void> {
  try {
    const method = req.method;

    if (method !== "POST") {
      res.status(405);
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.json({
        error: new MethodNotAllowedError(),
      });
      return;
    }

    const body = req.body;
    const userDao: UserDao = new UserDao();
    const user: User = await userDao.getBy("email", body.email);

    console.log(user);
    res.status(200);
    res.json({
      message: "Ok",
      data: [user],
    });
  } catch (error: unknown) {
    console.log(error);
  }
}
