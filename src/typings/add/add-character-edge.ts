import { ICharacterEdge } from "../character";

export type AddCharacterEdge<T, P extends keyof ICharacterEdge> = T extends never ? never : T & { [K in P]: Required<ICharacterEdge>[K] }