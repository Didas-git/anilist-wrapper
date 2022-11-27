import { MediaQuery } from "../media-query";

export type ExtractMedia<T> = T extends MediaQuery<infer S> ? S : never;