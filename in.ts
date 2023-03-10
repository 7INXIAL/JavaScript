export {};

export interface Syntax {
  /** @指定的属性是否在指定的对象或其原型链中 */
  in<T>(
    property: string | symbol,
    target: T
  ):
    | boolean
    | {
        // property in target
      };
}
