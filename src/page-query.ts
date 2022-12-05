import { Query } from "./base-query";
import { MediaQuery } from "./media-query";
import { AddPage, ExtractMedia, Page, PageArguments, PageInfo } from "./typings";

export interface PageQuery<T> {
    fetch(raw?: false): Promise<T extends Page ? { [K in keyof T]: T[K] } : { media: Array<{ id: number }> }>
    fetch(raw?: true): Promise<T extends Page ? { data: { Page: { [K in keyof T]: T[K] } } } : { data: { Page: { media: Array<{ id: number }> } } }>
}

export class PageQuery<T = {}> extends Query<Page> {
    protected options: PageArguments = {
        page: 1,
        perPage: 10
    };

    protected default: string = `media {
        id
    }`;
    protected type: string = "Page";
    constructor(page?: number)
    constructor(options?: PageArguments)
    constructor(options?: number | PageArguments) {
        super();

        if (typeof options === "number") this.options.page = options;
        else this.options = { ...this.options, ...options };
    }

    protected buildQuery(): string {
        const { args, fields } = this.preBuild();

        return `query {
    Page(${args}) {
        ${fields}
    }
}`
    }

    withPageInfo(...args: Array<keyof PageInfo>): PageQuery<AddPage<T, "pageInfo">> {
        this.query.set("pageInfo", args.length ? args : ["total", "perPage", "currentPage", "lastPage", "hasNextPage"]);
        return <never>this;
    }

    withMedia<M extends MediaQuery, K extends MediaQuery<unknown>>(media?: K | ((media: M) => K)): PageQuery<T & { media: Array<ExtractMedia<K>> }> {
        const { args, fields } = typeof media === "function" ? media(<never>new MediaQuery())["preBuild"]() : media?.["preBuild"]() ?? new MediaQuery()["preBuild"]();

        this.query.set("media", { args, fields: [fields] })
        return <never>this;
    }
}