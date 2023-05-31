import type { StudioQuery } from "../../queries";

export type ExtractStudio<T> = T extends StudioQuery<infer S> ? { [K in keyof S]: S[K] } : never;