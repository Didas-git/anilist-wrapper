import { Query } from "./base-query";
import { MediaQuery } from "./media-query";
import { AddPage, ExtractMedia, Page, PageArguments, PageInfo } from "./typings";

export interface PageQuery<T> {
    fetch(raw?: false): Promise<T extends Page ? { [K in keyof T]: T[K] } : { media: Array<{ id: number }> }>
    fetch(raw?: true): Promise<T extends Page ? { data: { Page: { [K in keyof T]: T[K] } } } : { data: { Page: { media: Array<{ id: number }> } } }>
}

export class PageQuery<T = { empty: never }> extends Query {
    protected options: PageArguments = {
        page: 1,
        perPage: 10
    };

    protected query = new Set<keyof Page>();
    protected preQuery = new Map<keyof Page, string>();
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
        const { options, returns } = this.preBuild();

        return `query {
    Page(${options}) {
        ${returns}
    }
}`
    }

    withPageInfo(...args: Array<keyof PageInfo>): PageQuery<AddPage<T, "pageInfo">> {

        const pageQuery = <never>(args.length ? `pageInfo {
            ${args.join(",\n")}
        }` : `pageInfo {
            total,
            perPage,
            currentPage,
            lastPage,
            hasNextPage
        }`);

        this.query.add(pageQuery);
        return <never>this;
    }

    withMedia<M extends MediaQuery, K extends MediaQuery<unknown>>(media?: K | ((media: M) => K)): PageQuery<T & { media: Array<ExtractMedia<K>> }> {
        const { options, returns } = typeof media === "function" ? media(<never>new MediaQuery())["preBuild"]() : media?.["preBuild"]() ?? new MediaQuery()["preBuild"]();

        const mediaQuery = <never>(options.length ? `media(${options}) {
            ${returns}
        }` : `media {
            returns
        }`)

        this.preQuery.has("media") && this.query.delete(<never>this.preQuery.get("media"))
        this.preQuery.set("media", mediaQuery)
        return <never>this;
    }
}