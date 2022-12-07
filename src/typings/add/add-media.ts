import { Media } from "../media";

export type AddMedia<T, P extends keyof Media> = T extends never ? never : T & { [K in P]: Required<Media>[K] }