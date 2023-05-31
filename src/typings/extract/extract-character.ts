import type { CharacterQuery } from "../../queries";

export type ExtractCharacter<T> = T extends CharacterQuery<infer S> ? { [K in keyof S]: S[K] } : never;