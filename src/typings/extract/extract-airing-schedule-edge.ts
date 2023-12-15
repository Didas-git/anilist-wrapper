import type { AiringScheduleEdge } from "../../connection/airing-schedule-edge";

export type ExtractAiringScheduleEdge<T> = T extends AiringScheduleEdge<infer S> ? { [K in keyof S]: S[K] } : never;