import type { StaffEdge } from "../../connection";

export type ExtractStaffEdge<T> = T extends StaffEdge<infer S> ? { [K in keyof S]: S[K] } : never;