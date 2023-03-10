export {};
// 大于 2^53 - 1 的整数
export interface Syntax {
  (value: bigint | boolean | number | string): bigint;

  /** @将BigInt值转换为一个-2^(width-1)与2^(width-1)-1之间的有符号整数 */
  asIntN(bits: number, int: bigint): bigint;

  /** @将BigInt转换为一个0和2^width-1之间的无符号整数 */
  asUintN(bits: number, int: bigint): bigint;

  readonly prototype: {
    toString(radix?: number): string;

    toLocaleString(
      locales?: Intl.LocalesArgument,
      options?: BigIntToLocaleStringOptions
    ): string;

    valueOf(): bigint;

    readonly [Symbol.toStringTag]: "BigInt";
  };
}
