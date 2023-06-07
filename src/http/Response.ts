import { User } from "@/database/model/User";

export default interface Response {
  message?: string;
  error?: Error;
  data?: User[];
}
