import type { MediaEdge } from "../../connection";

export type ExtractMediaEdge<T> = T extends MediaEdge<infer S> ? { [K in keyof S]: S[K] } : never;