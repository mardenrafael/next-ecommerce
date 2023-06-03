export interface UnsupportedMediaTypeInterface extends Error {}

export default class UnsupportedMediaTypeError
  implements UnsupportedMediaTypeInterface
{
  public message: "Unsupported Media Type";
  public name: string;
  public stack: string | undefined;
  public cause: unknown;

  constructor() {
    this.message = "Unsupported Media Type";
    this.name = UnsupportedMediaTypeError.name;
    this.stack = new Error().stack;
  }
}
