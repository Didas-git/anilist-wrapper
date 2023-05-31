import { MediaEdge, PageInfo } from "../connection";
import { MediaQuery } from ".";
import { Query } from "./query";

import type {
    ExtractMediaEdge,
    StudioArguments,
    ExtractPageInfo,
    ExtractMedia,
    MapRelation,
    MediaSort,
    Studio
} from "../typings";

export interface StudioQuery<T> {
    fetch: ((raw?: false) => Promise<T extends Studio
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends Studio
            ? { data: { Studio: { [K in keyof T]: T[K] } } }
            : { data: { Studio: { id: number } } }>);
}

export class StudioQuery<T = {}> extends Query<Studio, StudioArguments> {
    protected args: StudioArguments = {};
    protected default: string = "id";
    protected type: string = "Studio";

    public constructor(id?: number);
    public constructor(args?: StudioArguments);
    public constructor(params?: StudioArguments | number) {
        super();
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    public withId(): StudioQuery<T & { id: Required<Studio>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withName(): StudioQuery<T & { name: Required<Studio>["name"] }> {
        this.query.set("name", void 0);
        return <never>this;
    }

    public isAnimationStudio(): StudioQuery<T & { isAnimationStudio: Required<Studio>["isAnimationStudio"] }> {
        this.query.set("isAnimationStudio", void 0);
        return <never>this;
    }

    public withMedia<E extends MediaEdge, M extends MediaQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: MediaEdge) => E),
        nodes?: M | ((node: MediaQuery) => M),
        pageInfo?: P | ((page: PageInfo) => P),
        args?: {
            sort?: Array<MediaSort>,
            isMain?: boolean,
            onList?: boolean,
            page?: number,
            perPage?: number
        }
    }): StudioQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("media", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("media", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public withSiteUrl(): StudioQuery<T & { siteUrl: Required<Studio>["siteUrl"] }> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    public isFavourite(): StudioQuery<T & { isFavourite: Required<Studio>["isFavourite"] }> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    public withFavourites(): StudioQuery<T & { favourites: Required<Studio>["favourites"] }> {
        this.query.set("favourites", void 0);
        return <never>this;
    }
}