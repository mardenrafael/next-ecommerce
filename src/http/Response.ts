import { User } from "@prisma/client";

export default interface Response {
  message?: string;
  error?: Error;
  data?: User[];
}
