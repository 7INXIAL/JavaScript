export {};

export interface Syntax<K, T> {
  readonly size: number;

  clear(): void;

  has(key: K): boolean;

  delete(key: K): boolean;

  get(key: K): T | undefined;

  set(key: K, element: T): this;

  forEach(
    callback: (element: T, key: K, map: this) => void,
    thisArg?: any
  ): void;
}
