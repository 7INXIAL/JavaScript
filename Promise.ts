export {};

export interface Syntax<T> {
  new <T>(
    callback: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T>;

  readonly prototype: {
    then<T1 = T, T2 = never>(
      onfulfilled?: (value: T) => T1 | PromiseLike<T1>,
      onrejected?: (reason: any) => T2 | PromiseLike<T2>
    ): Promise<T1 | T2>;

    catch<R = never>(
      onrejected?: (reason: any) => R | PromiseLike<R>
    ): Promise<T | R>;
  };

  /** @多异步 resolve depends on is has one resolve */
  any<T>(iterable: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;

  /** @多异步 resolve depends on is all resolve */
  all<T>(iterable: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;

  /** @多异步 resolve depends on is all finish */
  allSettled<T>(
    iterable: Iterable<T | PromiseLike<T>>
  ): Promise<PromiseSettledResult<Awaited<T>>[]>;

  /** @多异步 resulet depends on first finished resulet */
  race<T>(iterable: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;

  /** @拒绝 return promise is reject */
  reject<T = never>(reason?: any): Promise<T>;

  /** @完成 return a promise is resolve or a promise with its resulet */
  resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;

}
