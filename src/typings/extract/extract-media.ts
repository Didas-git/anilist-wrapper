import { MediaQuery } from "../../queries/media-query";

export type ExtractMedia<T> = T extends MediaQuery<infer S> ? { [K in keyof S]: S[K] } : never;