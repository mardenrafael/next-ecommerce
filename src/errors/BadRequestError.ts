export interface BadRequestErrorInterface extends Error {
  message: "Bad request error";
}

export default class BadRequestError implements BadRequestErrorInterface {
  name: string;
  message: "Bad request error";
  stack?: string;
  cause?: unknown;

  constructor() {
    this.message = "Bad request error";
    this.name = BadRequestError.name;
    this.stack = new Error().stack;
  }
}
