import { MediaEdge, PageInfo } from "../../connection";
import { MediaQuery } from "../../media-query";
import { ExtractMedia, ExtractMediaEdge, ExtractPageInfo } from "../extract";

export type MapRelation<E extends MediaEdge, M extends MediaQuery, P extends PageInfo> = {
    relations: {
        [K in "edges" | "nodes" | "pageInfo" as keyof ExtractMediaEdge<E> extends never ? Exclude<K, "edges"> : keyof ExtractMedia<M> extends never ? Exclude<K, "nodes"> : keyof ExtractPageInfo<P> extends never ? Exclude<K, "pageInfo"> : K]: K extends "edges"
        ? Array<ExtractMediaEdge<E>>
        : K extends "nodes"
        ? Array<ExtractMedia<M>>
        : ExtractPageInfo<P>
    }
}