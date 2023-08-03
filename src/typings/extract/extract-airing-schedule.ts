import type { AiringScheduleQuery } from "../../queries";

export type ExtractAiringSchedule<T> = T extends AiringScheduleQuery<infer S> ? { [K in keyof S]: S[K] } : never;