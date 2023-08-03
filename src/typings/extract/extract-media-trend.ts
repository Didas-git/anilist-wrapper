import type { MediaTrendQuery } from "../../queries";

export type ExtractMediaTrend<T> = T extends MediaTrendQuery<infer S> ? { [K in keyof S]: S[K] } : never;