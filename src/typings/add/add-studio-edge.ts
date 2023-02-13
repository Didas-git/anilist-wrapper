import { IStudioEdge } from "../studio";

export type AddStudioEdge<T, P extends keyof IStudioEdge> = T extends never ? never : T & { [K in P]: Required<IStudioEdge>[K] };