export type MapRelation<KE, KM, KP> = {
    relations: {
        [K in "edges" | "nodes" | "pageInfo" as keyof KE extends never
        ? keyof KM extends never
        ? keyof KP extends never
        ? never
        : Exclude<K, "edges" | "nodes">
        : keyof KP extends never
        ? Exclude<K, "edges" | "pageInfo">
        : Exclude<K, "edges">
        : keyof KM extends never
        ? keyof KP extends never ? Exclude<K, "nodes" | "pageInfo"> : Exclude<K, "nodes">
        : keyof KP extends never
        ? Exclude<K, "pageInfo">
        : K
        ]: K extends "edges"
        ? Array<KE>
        : K extends "nodes"
        ? Array<KM>
        : KP
    }
};