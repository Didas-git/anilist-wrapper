import { Media } from "./media";

export type Add<T, P extends Media> = T extends never ? never : { [K in keyof (T & P) as K extends "empty" ? never : K]: (T & P)[K] }