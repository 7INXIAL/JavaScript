export {};
export interface Syntax {
  /** @复制多个源对象上的所有可枚举属性到目标对象 */
  assign(
    target: object,
    ...sources: any[]
  ):
    | any
    | {
        // return sources.reduce((target, source) => {
        //   return Reflect.ownKeys(source).reduce((key) => {
        //     target[key] = source[key]
        //     return
        //   },target);
        // },target)
      };

  /** @创建对象并指定原形并且可以设置对象的初始属性 */
  create(
    prototype: object | null,
    properties?: PropertyDescriptorMap & ThisType<any>
  ):
    | any
    | {
        // const target = {};
        // Object.setPrototypeOf(target, prototype);
        // if (properties) {
        //   Object.defineProperties(target, defineProperties)
        // }
        // return target;
      };

  /** @判断两个人是否为同一个值 Object.is(+0,-0) false; Object.is(NaN,NaN) true*/
  is(
    v: any,
    y: any
  ):
    | boolean
    | {
        // if (v === y) return v !== 0 || y !== 0 || 1 / v === 1 / y;
        // return v !== v && y !== yield;
      };

  ////// 原型
  /** @获取对象的原型 */
  getPrototypeOf: (target: any) => any;

  /** @设置指定对象的原型 */
  setPrototypeOf(target: any, prototype: object | null): any;

  ////// 属性描述符
  /** @批量定义或修改属性 通过属性描述符 */
  defineProperties<T>(
    target: T,
    properties: PropertyDescriptorMap & ThisType<any>
  ): T;

  /** @单个定义或修改属性 通过属性描述符 */
  defineProperty<T>(
    target: T,
    property: PropertyKey,
    descriptor: PropertyDescriptor & ThisType<any>
  ):
    | T
    | {
        // get:function(){
        //   return this.[`_${property}`];
        // },
        // set:function(value){
        //   this.[`_${property}`] = value;
        //   // update view
        // }
      };

  /** @获取指定属性描述符 */
  getOwnPropertyDescriptor: (
    target: any,
    property: PropertyKey
  ) => PropertyDescriptor | undefined;

  /** @获取所有属性描述符 */
  getOwnPropertyDescriptors<T>(target: T): {
    [P in keyof T]: TypedPropertyDescriptor<T[P]>;
  } & {
    [x: string]: PropertyDescriptor;
  };

  ////// 规范对象
  /** @是否是可扩展的 */
  isExtensible(target: any): boolean;

  /** @不可扩展对象 属性不可增加 */
  preventExtensions<T>(o: T): T;

  /** @是否密封 */
  isSealed(target: any): boolean;

  /** @密封对象 属性不可修改添加 属性值原本可变则可修改 */
  seal<T>(target: T): T;

  /** @是否冻结 */
  isFrozen(target: any): boolean;

  /** @冻结对象 属性不可修改添加 属性值变为不可更改 浅冻结 */
  freeze<T>(target: T): Readonly<T>;

  ////// 属性
  /** @可枚举属性键的数组 不包括 Symbol 属性 */
  keys(target: {}): string[];

  /** @可枚举属性值的数组 不包括 Symbol 属性 */
  values(target: {}): any[];

  /** @可枚举属性的健值对数组 不包括 Symbol 属性 */
  entries(target: {}): [string, any][];

  /** @获取自身所有的属性键 包括不可枚举属性，不包括 Symbol 属性 */
  getOwnPropertyNames(target: any): string[];

  /** @获取所有Symbol属性键 */
  getOwnPropertySymbols(target: any): symbol[];

  /** @确定对象自身是否具有指定名称的属性 */
  hasOwn: (target: any, property: PropertyKey) => boolean;

  /** @健值对转换对象 */
  fromEntries<T = any>(
    iterable: Iterable<readonly [PropertyKey, T]>
  ): { [k: string]: T };

  /** @原型 */
  readonly prototype: {
    /** @判断一个对象是否存在于另一个对象的原型链中 */
    isPrototypeOf(target: Object): boolean;

    /** @确定指定的属性是否可枚举 */
    propertyIsEnumerable(prototype: PropertyKey): boolean;

    /** @确定对象自身是否具有指定名称的属性 可用hasOwn取代 */
    hasOwnProperty(v: PropertyKey): boolean;

    /** @使用当前的区域设置转换为字符串 */
    toLocaleString(): string;

    /** @返回一个表示该对象的字符串 */
    toString(): string;

    /** @返回对象的原始值 可自定义 */
    valueOf(): Object;
  };
}
