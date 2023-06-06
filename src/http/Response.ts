import { User } from "@/database/model/User";
import { InternalServerErrorInterface } from "@/errors/InternalServerError";
import { MethodNotAllowedInterface } from "@/errors/MethodNotAllowedError";
import { UnsupportedMediaTypeInterface } from "@/errors/UnsupportedMediaType";

export default interface Response {
  message?: string;
  error?:
    | MethodNotAllowedInterface
    | UnsupportedMediaTypeInterface
    | InternalServerErrorInterface;
  data?: User[];
}
