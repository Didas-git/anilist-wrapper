import type { Complex } from "./complex-internal-query";

export type QueryType<T> = Map<keyof T, Array<string> | Complex | undefined>;