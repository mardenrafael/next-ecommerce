export interface UnsupportedMediaTypeInterface extends Error {
  message: "Unsupported Media Type";
  statusCode: number;
}

export default class UnsupportedMediaTypeError
  implements UnsupportedMediaTypeInterface
{
  public message: "Unsupported Media Type";
  public name: string;
  public stack?: string;
  public cause: unknown;
  public statusCode: number;

  constructor() {
    this.message = "Unsupported Media Type";
    this.name = UnsupportedMediaTypeError.name;
    this.statusCode = 415;
  }
}
