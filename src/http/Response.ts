export default interface Response<T> {
  message?: string;
  error?: Error;
  data?: T[];
}
