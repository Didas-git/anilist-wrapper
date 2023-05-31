import type { CharacterEdge } from "../../connection";

export type ExtractCharacterEdge<T> = T extends CharacterEdge<infer S> ? { [K in keyof S]: S[K] } : never;