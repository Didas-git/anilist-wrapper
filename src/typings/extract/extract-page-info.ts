import { PageInfo } from "../../connection/page-info";

export type ExtractPageInfo<T> = T extends PageInfo<infer S> ? { [K in keyof S]: S[K] } : never;