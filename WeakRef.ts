export {};

export interface Syntax<T extends object> {

  new (target: T): this;

  /** @返回引用的对象 */
  deref(): this | undefined;
}
