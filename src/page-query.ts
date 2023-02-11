import { Query } from "./query";
import { MediaQuery } from "./media-query";
import { AddPage, ExtractCharacter, ExtractMedia, Page, PageArguments } from "./typings";
import { PageInfo } from "./connection/page-info";
import { CharacterQuery } from "./character-query";

export interface PageQuery<T> {
    fetch(raw?: false): Promise<T extends Page ? { [K in keyof T]: T[K] } : { media: Array<{ id: number }> }>
    fetch(raw?: true): Promise<T extends Page ? { data: { Page: { [K in keyof T]: T[K] } } } : { data: { Page: { media: Array<{ id: number }> } } }>
}

export class PageQuery<T = {}> extends Query<Page, PageArguments> {
    protected type: string = "Page";
    protected args: PageArguments = {
        page: 1,
        perPage: 10
    };
    protected default: string = `media {
        id
    }`;

    constructor(page?: number)
    constructor(args?: PageArguments)
    constructor(args?: number | PageArguments) {
        super();

        if (typeof args === "number") this.args.page = args;
        else this.args = { ...this.args, ...args };
    }

    protected buildQuery(): string {
        const { args, fields } = this.parse();

        return `query {Page(${args}){${fields}}}`
    }

    public withPageInfo<P extends PageInfo, K extends PageInfo>(page: K | ((page: P) => K)): PageQuery<AddPage<T, "pageInfo">> {
        const { args, fields } = typeof page === "function" ? page(<P>new PageInfo()).parse() : page.parse() ?? new PageInfo().parse();

        this.query.set("pageInfo", { args, fields: [fields] });
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): PageQuery<T & { media: Array<ExtractMedia<M>> }> {
        const { args, fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse() ?? new MediaQuery().parse();

        this.query.set("media", { args, fields: [fields] })
        return <never>this;
    }

    public withCharacters<C extends CharacterQuery>(characters: C | ((characters: CharacterQuery) => C)): PageQuery<T & { characters: Array<ExtractCharacter<C>> }> {
        const { args, fields } = typeof characters === "function" ? characters(<never>new CharacterQuery()).parse() : characters.parse() ?? new CharacterQuery().parse();

        this.query.set("characters", { args, fields: [fields] })
        return <never>this;
    }
}