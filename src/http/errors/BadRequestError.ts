export interface BadRequestErrorInterface extends Error {
  message: "Bad request error";
  statusCode: number;
}

export default class BadRequestError implements BadRequestErrorInterface {
  name: string;
  message: "Bad request error";
  stack?: string;
  cause?: unknown;
  statusCode: number;

  constructor() {
    this.message = "Bad request error";
    this.name = BadRequestError.name;
    this.statusCode = 405;
  }
}
