export {};

export interface Syntax {
  /** @调用函数 */
  apply: (
    target: Function,
    thisArgument: any,
    argumentsList: ArrayLike<any>
  ) => any;

  /**
   * @实例化构造函数
   * @param newTarget 指定原型的构造函数
   */
  construct: (
    target: Function,
    argumentsList: ArrayLike<any>,
    newTarget?: Function
  ) => any;

  /** @添加或修改属性 */
  defineProperty: (
    target: object,
    property: PropertyKey,
    descriptor: PropertyDescriptor & ThisType<any>
  ) => boolean;

  /** @获取属性描述符 */
  getOwnPropertyDescriptor: <T extends object, P extends PropertyKey>(
    target: T,
    property: P
  ) => TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;

  /** @是否存在该属性 */
  has: (target: object, property: PropertyKey) => boolean;

  /** @自身属性键组成的数组 */
  ownKeys: (target: object) => (string | symbol)[];

  /** @是否可扩展 */
  isExtensible: (target: object) => boolean;

  /** @使其不可扩展 */
  preventExtensions: (target: object) => boolean;

  /** @移除属性 */
  deleteProperty: (target: object, property: PropertyKey) => boolean;

  /** @获取属性 */
  get: <T extends object, P extends PropertyKey>(
    target: T,
    property: P,
    thisGetter?: unknown
  ) => P extends keyof T ? T[P] : any;

  /** @设置属性 */
  set: (
    target: object,
    property: PropertyKey,
    value: any,
    thisSetter?: any
  ) => boolean;

  /** @获取对象的原型 */
  getPrototypeOf: (target: object) => object | null;

  /** @设置原型 */
  setPrototypeOf: (target: object, prototype: object | null) => boolean;
}
