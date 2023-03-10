export {};

export interface Syntax<T> {
  readonly size: number;

  clear(): void;

  add(element: T): this;

  has(element: T): boolean;

  delete(element: T): boolean;

  forEach(
    callbackfn: (element: T, key: T, set: this) => void,
    thisArg?: any
  ): void;

  keys(): IterableIterator<T>;

  values(): IterableIterator<T>;

  entries(): IterableIterator<[T, T]>;
}
