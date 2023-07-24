import { CharacterQuery } from "./character-query";
import { StudioQuery } from "./studio-query";
import { MediaQuery } from "./media-query";
import { PageInfo } from "../connection";
import { Base } from "../base";

import type {
    ExtractCharacter,
    ExtractMedia,
    ExtractStudio,
    Page,
    PageArguments
} from "../typings";

export interface PageQuery<T> {
    fetch: ((raw?: false) => Promise<T extends Page
        ? { [K in keyof T]: T[K] }
        : { media: Array<{ id: number }> }>) & ((raw?: true) => Promise<T extends Page
            ? { data: { Page: { [K in keyof T]: T[K] } } }
            : { data: { Page: { media: Array<{ id: number }> } } }>);
}

export class PageQuery<T = {}> extends Base<Page, PageArguments> {
    protected type: string = "Page";
    protected default: string = `media {
        id
    }`;

    protected args: PageArguments = {
        page: 1,
        perPage: 10
    };

    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(page?: number, oAuthToken?: string);
    public constructor(args?: PageArguments, oAuthToken?: string);
    public constructor(args?: number | PageArguments, oAuthToken?: string) {
        super(oAuthToken);
        if (typeof args === "number") this.args.page = args;
        else this.args = { ...this.args, ...args };
    }

    public withPageInfo<P extends PageInfo, K extends PageInfo>(page: K | ((page: P) => K)): PageQuery<T & { pageInfo: Required<Page>["pageInfo"] }> {
        const { args, fields } = typeof page === "function" ? page(<P>new PageInfo()).parse() : page.parse();

        this.query.set("pageInfo", { args, fields: [fields] });
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): PageQuery<T & { media: Array<ExtractMedia<M>> }> {
        const { args, fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args, fields: [fields] });
        return <never>this;
    }

    public withCharacters<C extends CharacterQuery>(characters: C | ((characters: CharacterQuery) => C)): PageQuery<T & { characters: Array<ExtractCharacter<C>> }> {
        const { args, fields } = typeof characters === "function" ? characters(<never>new CharacterQuery()).parse() : characters.parse();

        this.query.set("characters", { args, fields: [fields] });
        return <never>this;
    }

    public withStudios<S extends StudioQuery>(studios: S | ((studios: StudioQuery) => S)): PageQuery<T & { studios: Array<ExtractStudio<S>> }> {
        const { args, fields } = typeof studios === "function" ? studios(<never>new StudioQuery()).parse() : studios.parse();

        this.query.set("studios", { args, fields: [fields] });
        return <never>this;
    }
}