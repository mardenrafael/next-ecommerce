export interface NotFoundErrorInterface extends Error {
  message: "Not Found Error";
}

export default class NotFoundError implements NotFoundErrorInterface {
  name: string;
  message: "Not Found Error";
  stack?: string;
  cause: unknown;

  constructor() {
    this.message = "Not Found Error";
    this.name = NotFoundError.name;
    this.stack = new Error().stack;
  }
}
