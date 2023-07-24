import { MediaEdge, PageInfo } from "../connection";
import { MediaQuery } from "./media-query";
import { Base } from "../base";

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

export class StudioQuery<T = {}> extends Base<Studio, StudioArguments> {
    protected override default: string = "id";
    protected override type: string = "Studio";
    protected override args: StudioArguments = {};
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(id?: number, oAuthToken?: string);
    public constructor(args?: StudioArguments, oAuthToken?: string);
    public constructor(params?: StudioArguments | number, oAuthToken?: string) {
        super(oAuthToken);
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