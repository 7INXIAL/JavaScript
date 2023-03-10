export {};

export interface Syntax {
  new (value?: any): Boolean;
  prototype: {
    valueOf(): boolean;
    toString(): string;
  };
}
