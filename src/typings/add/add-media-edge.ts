import { IMediaEdge } from "../media";

export type AddMediaEdge<T, P extends keyof IMediaEdge> = T extends never ? never : T & { [K in P]: Required<IMediaEdge>[K] };