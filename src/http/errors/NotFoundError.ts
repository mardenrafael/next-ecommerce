export interface NotFoundErrorInterface extends Error {
  message: "Not Found Error";
  statusCode: number;
}

export default class NotFoundError implements NotFoundErrorInterface {
  public name: string;
  public message: "Not Found Error";
  public stack?: string;
  public cause: unknown;
  public statusCode: number;

  constructor() {
    this.message = "Not Found Error";
    this.name = NotFoundError.name;
    this.statusCode = 404;
  }
}
