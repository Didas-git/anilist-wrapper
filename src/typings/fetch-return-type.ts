export type FetchReturnType<T> = T extends never ? never : { data: { Media: T } }