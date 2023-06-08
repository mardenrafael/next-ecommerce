import UserDao from "@/database/dao/UserDao/UserDao";
import Response from "@/http/Response";
import MethodNotAllowedError from "@/http/errors/MethodNotAllowedError";
import UnathorizedError from "@/http/errors/UnauthorizedError";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { randomUUID } from "crypto";
import { sign } from "jsonwebtoken";
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

    const { email, password, remember } = req.body;
    const userDao: UserDao = new UserDao();
    const user: User = await userDao.getByEmail(email);

    const result = await compare(password, user.password);

    if (result == false) {
      throw new UnathorizedError();
    }

    const token = sign(
      {
        name: user.name,
      },
      process.env.JWT_SECRET!,
      {
        algorithm: "HS256",
        expiresIn: 28800,
        noTimestamp: true,
        audience: `http://${req.headers.host}`,
        issuer: `http://${req.headers.host}`,
        jwtid: randomUUID(),
        header: {
          alg: "HS256",
          typ: "jwt",
        },
      }
    );

    if (remember != undefined && remember == true) {
      res.setHeader("Set-Cookie", `${req.headers.host}.session=${token}`);
    }

    res.status(200);
    res.json({
      message: "Operação realizado com sucesso",
      data: [user, { token: token }],
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(401);
    res.json({
      error: new UnathorizedError(),
    });
  }
}
