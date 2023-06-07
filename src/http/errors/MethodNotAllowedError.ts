export interface MethodNotAllowedInterface extends Error {
  message: "Method not Allowed";
}

export default class MethodNotAllowedError
  implements MethodNotAllowedInterface
{
  public message: "Method not Allowed";
  public name: string;
  public stack: string | undefined;
  public cause: unknown;

  constructor() {
    this.message = "Method not Allowed";
    this.name = MethodNotAllowedError.name;
    this.stack = new Error().stack;
  }
}
