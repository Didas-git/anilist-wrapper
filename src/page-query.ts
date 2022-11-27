import { Query } from "./base-query";
import { MediaQuery } from "./media-query";
import { Add, ExtractMedia, Page, PageArguments, PageFetchReturnType, PageInfo } from "./typings";

type ReqPage = Required<Page>

export interface PageQuery<T> {
    fetch<R extends boolean = false>(raw?: R): Promise<R extends true ? PageFetchReturnType<T extends Page ? T : { media: Array<{ id: number }> }> : T extends Page ? T : { media: Array<{ id: number }> }>
}

export class PageQuery<T = { empty: never }> extends Query {
    protected options: PageArguments = {
        page: 1,
        perPage: 10
    };

    protected query = new Set<keyof Page>();
    #preQuery = new Map<keyof Page, string>();
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
        this.#preQuery.forEach(val => this.query.add(<never>val))
        const { options, returns } = this.preBuild();

        return `query {
    Page(${options}) {
        ${returns}
    }
}`
    }

    withPageInfo(...args: Array<keyof PageInfo>): PageQuery<Add<T, { pageInfo: ReqPage["pageInfo"] }>> {

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

    withMedia<M extends MediaQuery, K extends MediaQuery<unknown>>(media?: K | ((media: M) => K)): PageQuery<Add<T, { media: Array<ExtractMedia<K>> }>> {
        const { options, returns } = typeof media === "function" ? media(<never>new MediaQuery())["preBuild"]() : media?.["preBuild"]() ?? new MediaQuery()["preBuild"]();

        const mediaQuery = <never>(options.length ? `media(${options}) {
            ${returns}
        }` : `media {
            returns
        }`)

        this.#preQuery.set("media", mediaQuery)
        return <never>this;
    }
}