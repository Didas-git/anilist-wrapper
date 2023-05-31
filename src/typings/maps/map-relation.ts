// Thanks `n_n#2622` on discord
export type MapRelation<KE, KM, KP> = {
    relations: {
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
    }
};