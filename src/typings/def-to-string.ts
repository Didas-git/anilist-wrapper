import { Media, MediaTitle } from "./media";

type AnyOf<U> =
    (U extends U ? (x: () => U) => 0 : never) extends (x: infer I) => 0
    ? I extends () => infer R
    ? Extract<U, R>
    : never
    : never;

type ConcatUnion<U extends string, Separator extends string = ", "> = _ConcatUnion<U, Separator, "">;
type _ConcatUnion<U extends string, Separator extends string, Accumulator extends string> =
    [U] extends [never]
    ? Accumulator
    : [AnyOf<U>] extends [infer E extends string]
    ? [Exclude<U, E>] extends [never]
    ? `${Accumulator}${E}`
    : _ConcatUnion<Exclude<U, E>, Separator, `${Accumulator}${E}${Separator}`>
    : Accumulator;

export type DefToString2<T extends object> = Array<{
    [K in keyof Required<T>]: T[K] extends object ?
    K extends string ?
    `${K} { ${ConcatUnion<keyof T[K] extends string ? `${keyof T[K]}` : never>} }` :
    never :
    never
}[keyof T]>;

//UHM... NEVER[]
type test = DefToString2<Media>