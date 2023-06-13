export interface UnathorizedErrorInterface extends Error {
  message: "Unathorized";
  statusCode: number;
}

export default class UnathorizedError implements UnathorizedErrorInterface {
  public message: "Unathorized";
  public name: string;
  public stack?: string;
  public cause: unknown;
  public statusCode: number;

  constructor() {
    this.message = "Unathorized";
    this.name = UnathorizedError.name;
    this.statusCode = 401;
  }
}
