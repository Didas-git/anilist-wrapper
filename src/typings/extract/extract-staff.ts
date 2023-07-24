import type { StaffQuery } from "../../queries";

export type ExtractStaff<T> = T extends StaffQuery<infer S> ? { [K in keyof S]: S[K] } : never;