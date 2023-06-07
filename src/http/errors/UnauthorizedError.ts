export interface UnathorizedErrorInterface extends Error {
  message: "Unathorized";
}

export default class UnathorizedError implements UnathorizedErrorInterface {
  message: "Unathorized";
  name: string;
  stack?: string;
  cause: unknown;

  constructor() {
    this.message = "Unathorized";
    this.name = UnathorizedError.name;
    this.stack = new Error().stack;
  }
}
