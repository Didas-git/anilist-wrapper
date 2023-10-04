import { AiringScheduleQuery } from "./airing-schedule-query";
import { MediaListQuery } from "./media-list-query";
import { CharacterQuery } from "./character-query";
import { StudioQuery } from "./studio-query";
import { StaffQuery } from "./staff-query";
import { MediaQuery } from "./media-query";
import { PageInfo } from "../connection";
import { Base } from "../base";

import type {
    ExtractAiringSchedule,
    ExtractMediaTrend,
    ExtractCharacter,
    ExtractMediaList,
    ExtractStudio,
    PageArguments,
    ExtractMedia,
    ExtractStaff,
    Page,
} from "../typings";
import { MediaTrendQuery } from "./media-trend-query";

export interface PageQuery<T> {
    fetch: ((raw?: false) => Promise<
        keyof T extends never
        ? { media: Array<{ id: number }> }
        : { [K in keyof T]: T[K] }
    >) & ((raw?: true) => Promise<
        keyof T extends never
        ? { data: { Page: { media: Array<{ id: number }> } } }
        : { data: { Page: { [K in keyof T]: T[K] } } }
    >);
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

    public withPageInfo<P extends PageInfo>(page: P | ((page: PageInfo) => P)): PageQuery<T & { pageInfo: Required<Page>["pageInfo"] }> {
        const { args, fields } = typeof page === "function" ? page(new PageInfo()).parse() : page.parse();

        this.query.set("pageInfo", { args, fields: [fields] });
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): PageQuery<T & { media: Array<ExtractMedia<M>> }> {
        const { args, fields } = typeof media === "function" ? media(new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args, fields: [fields] });
        return <never>this;
    }

    public withCharacters<C extends CharacterQuery>(characters: C | ((characters: CharacterQuery) => C)): PageQuery<T & { characters: Array<ExtractCharacter<C>> }> {
        const { args, fields } = typeof characters === "function" ? characters(new CharacterQuery()).parse() : characters.parse();

        this.query.set("characters", { args, fields: [fields] });
        return <never>this;
    }

    public withStaff<S extends StaffQuery>(staff: S | ((staff: StaffQuery) => S)): PageQuery<T & { staff: Array<ExtractStaff<S>> }> {
        const { args, fields } = typeof staff === "function" ? staff(new StaffQuery()).parse() : staff.parse();

        this.query.set("staff", { args, fields: [fields] });
        return <never>this;
    }

    public withStudios<S extends StudioQuery>(studios: S | ((studios: StudioQuery) => S)): PageQuery<T & { studios: Array<ExtractStudio<S>> }> {
        const { args, fields } = typeof studios === "function" ? studios(new StudioQuery()).parse() : studios.parse();

        this.query.set("studios", { args, fields: [fields] });
        return <never>this;
    }

    public withMediaList<M extends MediaListQuery>(mediaList: M | ((mediaList: MediaListQuery) => M)): PageQuery<T & { mediaList: Array<ExtractMediaList<M>> }> {
        const { args, fields } = typeof mediaList === "function" ? mediaList(new MediaListQuery()).parse() : mediaList.parse();

        this.query.set("mediaList", { args, fields: [fields] });
        return <never>this;
    }

    public withAiringSchedules<A extends AiringScheduleQuery>(airingSchedules: A | ((airingSchedules: AiringScheduleQuery) => A)): PageQuery<T & { airingSchedules: Array<ExtractAiringSchedule<A>> }> {
        const { args, fields } = typeof airingSchedules === "function" ? airingSchedules(new AiringScheduleQuery()).parse() : airingSchedules.parse();

        this.query.set("airingSchedules", { args, fields: [fields] });
        return <never>this;
    }

    public withMediaTrends<M extends MediaTrendQuery>(mediaTrends: M | ((mediaTrends: MediaTrendQuery) => M)): PageQuery<T & { mediaTrends: Array<ExtractMediaTrend<M>> }> {
        const { args, fields } = typeof mediaTrends === "function" ? mediaTrends(new MediaTrendQuery()).parse() : mediaTrends.parse();

        this.query.set("mediaTrends", { args, fields: [fields] });
        return <never>this;
    }
}