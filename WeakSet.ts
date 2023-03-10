export {};
/** @只能是对象的集合 */
export interface Syntax<T extends object> {

  add(element: T): this;

  has(element: T): boolean;

  delete(element: T): boolean;
}
