export {};
export interface Syntax<T> {
  target: T;
  handler: {
    // proxy(...args) & Function.prototype.apply() 和 Function.prototype.call() & Reflect.apply()
    apply: (target: T, thisArg: any, argumentsList: any[]) => any;

    // new proxy(...args) & Reflect.construct()
    construct: (target: T, argumentsList: any[], newTarget: Function) => object;

    // Object.defineProperty() & Reflect.defineProperty()
    defineProperty: (
      target: T,
      property: string | symbol,
      descriptor: PropertyDescriptor
    ) => boolean;

    // delete proxy[foo] 和 delete proxy.foo && Reflect.deleteProperty()
    deleteProperty: (target: T, property: string | symbol) => boolean;

    // proxy[foo] 和 proxy.bar & Object.create(proxy)[foo] & Reflect.get()
    get: (target: T, property: string | symbol, thisGetter: any) => any;

    // Object.getOwnPropertyDescriptor() & Reflect.getOwnPropertyDescriptor()
    getOwnPropertyDescriptor: (
      target: T,
      property: string | symbol
    ) => PropertyDescriptor | undefined;

    // Object.getPrototypeOf() & Reflect.getPrototypeOf() & Object.prototype.__proto__ & Object.prototype.isPrototypeOf() & instanceof
    getPrototypeOf: (target: T) => object | null;

    // foo in proxy & foo in Object.create(proxy) & with(proxy) { (foo); } & Reflect.has()
    has: (target: T, property: string | symbol) => boolean;

    // Object.isExtensible() & Reflect.isExtensible()
    isExtensible: (target: T) => boolean;

    // Object.getOwnPropertyNames() & Object.getOwnPropertySymbols() & Object.keys() & Reflect.ownKeys()
    ownKeys: (target: T) => ArrayLike<string | symbol>;

    // Object.preventExtensions() & Reflect.preventExtensions()
    preventExtensions: (target: T) => boolean;

    // proxy[foo] = bar 和 proxy.foo = bar & Object.create(proxy)[foo] = bar & Reflect.set()
    set: (
      target: T,
      property: string | symbol,
      newValue: any,
      thisSetter: any
    ) => boolean;

    // Object.setPrototypeOf() & Reflect.setPrototypeOf()
    setPrototypeOf: (target: T, prototype: object | null) => boolean;
  };
}
