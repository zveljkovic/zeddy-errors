export class ExceptionBase<T = void> extends Error {
  name: string;
  get message() {
    return '';
  }
  data: T;
  httpStatusCode: number;
  stack!: string;
  innerError?: Error;
  constructor(
    data: T,
    innerError?: Error,
    httpStatusCode?: number,
  ) {
    super();
    this.name = (this.constructor as any).name;
    this.data = data;
    this.httpStatusCode = httpStatusCode ?? 400;
    this.innerError = innerError;
  }
}

export class ErrorBase<T = void> extends Error {
  name: string;
  get message() {
    return '';
  }
  data: T;
  httpStatusCode: number;
  stack!: string;
  innerError?: Error;
  constructor(
    data: T,
    innerError?: Error,
    httpStatusCode?: number,
  ) {
    super();
    this.name = (this.constructor as any).name;
    this.data = data;
    this.httpStatusCode = httpStatusCode ?? 500;
    this.innerError = innerError;
  }
}
