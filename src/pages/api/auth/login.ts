import UserDao from "@/dao/UserDao/UserDao";
import MethodNotAllowedError from "@/errors/MethodNotAllowedError";
import Response from "@/http/Response";

import { User } from "@/database/model/User";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcryptjs";
import InternalServerError from "@/errors/InternalServerError";
import UnathorizedError from "@/errors/UnauthorizedError";

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

    const { email, password } = req.body;
    const userDao: UserDao = new UserDao();
    const userList: User[] = await userDao.getBy("email", email, undefined, {
      password: true,
    });

    if (userList.length > 1) {
      throw new InternalServerError();
    }

    const user = userList[0];

    const result = await compare(password, user.password);

    if (result == false) {
      throw new UnathorizedError();
    }

    res.status(200);
    res.json({
      message: "Operação realizado com sucesso",
      data: [user],
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(401);
    res.json({
      error: new UnathorizedError(),
    });
  }
}
