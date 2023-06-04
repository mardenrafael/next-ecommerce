import { InternalServerErrorInterface } from "@/errors/InternalServerError";
import { MethodNotAllowedInterface } from "@/errors/MethodNotAllowedError";
import { UnsupportedMediaTypeInterface } from "@/errors/UnsupportedMediaType";
import { User } from "@prisma/client";

export default interface Response {
  message?: string;
  error?:
    | MethodNotAllowedInterface
    | UnsupportedMediaTypeInterface
    | InternalServerErrorInterface;
  data?: User[];
}
