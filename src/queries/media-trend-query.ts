import { MediaQuery } from "./media-query";
import { Base } from "../base";

import type {
    MediaTrendArguments,
    ExtractMedia,
    MediaTrend
} from "../typings";

export interface MediaTrendQuery<T> {
    fetch: ((raw?: false) => Promise<T extends MediaTrend
        ? { [K in keyof T]: T[K] }
        : { episode: number }>) & ((raw?: true) => Promise<T extends MediaTrend
            ? { data: { MediaTrend: { [K in keyof T]: T[K] } } }
            : { data: { MediaTrend: { episode: number } } }>);
}

export class MediaTrendQuery<T = {}> extends Base<MediaTrend, MediaTrendArguments> {
    protected override default: string = "episode";
    protected override type: string = "MediaTrend";
    protected override args: MediaTrendArguments = {};
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(id?: number, oAuthToken?: string);
    public constructor(args?: MediaTrendArguments, oAuthToken?: string);
    public constructor(params?: MediaTrendArguments | number, oAuthToken?: string) {
        super(oAuthToken);
        if (params === undefined) return;
        if (typeof params === "number") this.args.mediaId = params;
        else this.args = params;
    }

    public withId(): MediaTrendQuery<T & { mediaId: Required<MediaTrend>["mediaId"] }> {
        this.query.set("mediaId", void 0);
        return <never>this;
    }

    public withDate(): MediaTrendQuery<T & { date: Required<MediaTrend>["date"] }> {
        this.query.set("date", void 0);
        return <never>this;
    }

    public withTrending(): MediaTrendQuery<T & { trending: Required<MediaTrend>["trending"] }> {
        this.query.set("trending", void 0);
        return <never>this;
    }

    public withAverageScore(): MediaTrendQuery<T & { averageScore: Required<MediaTrend>["averageScore"] }> {
        this.query.set("averageScore", void 0);
        return <never>this;
    }

    public withPopularity(): MediaTrendQuery<T & { popularity: Required<MediaTrend>["popularity"] }> {
        this.query.set("popularity", void 0);
        return <never>this;
    }

    public inProgress(): MediaTrendQuery<T & { inProgress: Required<MediaTrend>["inProgress"] }> {
        this.query.set("inProgress", void 0);
        return <never>this;
    }

    public withReleasing(): MediaTrendQuery<T & { releasing: Required<MediaTrend>["releasing"] }> {
        this.query.set("releasing", void 0);
        return <never>this;
    }

    public withEpisode(): MediaTrendQuery<T & { episode: Required<MediaTrend>["episode"] }> {
        this.query.set("episode", void 0);
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): MediaTrendQuery<T & { media: ExtractMedia<M> }> {
        const { fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args: void 0, fields: [fields] });
        return <never>this;
    }
}