export {};

export interface Syntax<T> {
  length: number;
  [index: number]: T | undefined;

  static: {
    /** @判断 */
    isArray(array: any): array is Array<T>;
    /** @实例化 */
    new (elementNorArrayLength: T[] | number): Array<T>;
    of(...items: T[]): Array<T>;
    from(
      arrayLike: ArrayLike<T>,
      mapCallback: (element: T, index: number) => any,
      thisArg?: any
    ): Array<any>;
  };

  /** @查找数组中的元素 负数从末尾开始查找 */
  at(index: number): T | undefined;

  /** @修改数组 */
  copyWithin(targetIndex: number, startIndex: number, endIndex?: number): this;
  splice(startIndex: number, deleteCount: number, ...items: T[]): T[];

  /** @填充数组 */
  fill(target: T, startIndex?: number, endIndex?: number): this;

  /** @拷贝数组 */
  slice(startIndex?: number, endIndex?: number): Array<T>;

  /** @合并数组 */
  concat(...items: Array<T>): Array<T>;

  /** @转译成字符串 */
  join(separator?: string): string;

  /** @翻转数组 */
  reverse(): Array<T>;

  /** @排序 */
  sort(compareFn?: (a: T, b: T) => number): this;

  /** @扁平化数组 */
  flat(depth: number): Array<any>;

  flatMap(
    callback: (element: T, index: number, array: this) => any,
    thisArg?: any
  ): Array<any>;

  /** @高阶遍历 */
  some(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): boolean;
  every(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): boolean;
  filter(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): Array<T>;
  map(
    callback: (element: T, index: number, array: this) => any,
    thisArg?: any
  ): Array<any>;
  forEach(
    callback: (element: T, index: number, array: this) => void,
    thisArg?: any
  ): void;
  reduce<U>(
    callbackfn: (
      overlay: U | T,
      element: T,
      index: number,
      array: this
    ) => number,
    initial?: U
  ): U;
  reduceRight<U>(
    callbackfn: (
      overlay: U | T,
      element: T,
      index: number,
      array: this
    ) => number,
    initial?: U
  ): U;
  group(
    callback: (element: T, index: number, array: this) => any,
    thisArg?: any
  ): { [key: string]: Array<any> };
  groupToMap(
    callback: (element: T, index: number, array: this) => any,
    thisArg?: any
  ): Map<any, Array<any>>;

  /** @增删元素 */
  unshift(...items: T[]): number;
  push(...items: T[]): number;
  shift(): T | undefined;
  pop(): T | undefined;

  /** @高阶查找 */
  find(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): T | undefined;
  findLast(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): T | undefined;
  findIndex(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): number | -1;
  findLastIndex(
    callback: (element: T, index: number, array: this) => boolean,
    thisArg?: any
  ): number | -1;

  /** @查找元素索引 */
  indexOf(searchElement: number, fromIndex?: number): number | -1;
  lastIndexOf(searchElement: number, fromIndex?: number): number | -1;
  includes(searchElement: T, fromIndex?: number): boolean;

  /** @迭代器 */
  [Symbol.iterator](): IterableIterator<number>;
  entries(): IterableIterator<[number, number]>;
  keys(): IterableIterator<number>;
  values(): IterableIterator<number>;

  /** @字符串化 */
  toLocaleString(): string;
  toString(): string;
}
