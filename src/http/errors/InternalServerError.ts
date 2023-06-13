export interface InternalServerErrorInterface extends Error {
  message: "Internal Server Error";
  statusCode: number;
}

export default class InternalServerError
  implements InternalServerErrorInterface
{
  public message: "Internal Server Error";
  public name: string;
  public stack?: string;
  public cause?: unknown;
  public statusCode: number;

  constructor() {
    this.message = "Internal Server Error";
    this.name = InternalServerError.name;
    this.statusCode = 500;
  }
}
