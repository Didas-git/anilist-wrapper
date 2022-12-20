import { Page } from "../page";

export type AddPage<T, P extends keyof Page> = T extends never ? never : T & { [K in P]: Required<Page>[K] }