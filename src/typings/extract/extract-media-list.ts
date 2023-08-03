import type { MediaListQuery } from "../../queries";

export type ExtractMediaList<T> = T extends MediaListQuery<infer S> ? { [K in keyof S]: S[K] } : never;