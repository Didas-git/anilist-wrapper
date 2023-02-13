import { Studio } from "../studio";

export type AddStudio<T, P extends keyof Studio> = T extends never ? never : T & { [K in P]: Required<Studio>[K] };