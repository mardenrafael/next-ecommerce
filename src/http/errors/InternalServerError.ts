export interface InternalServerErrorInterface extends Error {
  message: "Internal Server Error";
}

export default class InternalServerError
  implements InternalServerErrorInterface
{
  public message: "Internal Server Error";
  public name: string;
  public stack?: string | undefined;
  public cause?: unknown;

  constructor() {
    this.message = "Internal Server Error";
    this.name = InternalServerError.name;
    this.stack = new Error().stack;
  }
}
