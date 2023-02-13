import { IPageInfo } from "../page-info";

export type AddPageInfo<T, P extends keyof IPageInfo> = T extends never ? never : T & { [K in P]: Required<IPageInfo>[K] };