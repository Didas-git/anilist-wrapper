import { StudioEdge } from "../../connection";

export type ExtractStudioEdge<T> = T extends StudioEdge<infer S> ? { [K in keyof S]: S[K] } : never;