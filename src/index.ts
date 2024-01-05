import { Client } from "./client";

export * from "./anilist-error";
export * from "./connection";
export * from "./client";

export type * from "./typings";
export type * from "./queries";

export const anilist = new Client();