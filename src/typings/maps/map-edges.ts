// Thanks `d.n_n.b on discord
export type MapRelations<KE, KM, KP> = {
    [K in "edges" | "nodes" | "pageInfo" as K & (
        | (keyof KE extends never ? never : "edges")
        | (keyof KM extends never ? never : "nodes")
        | (keyof KP extends never ? never : "pageInfo")
    )
    ]: K extends "edges"
    ? Array<KE>
    : K extends "nodes"
    ? Array<KM>
    : KP
};