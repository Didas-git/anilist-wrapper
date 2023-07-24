import { Base } from "../base";

import type {
    AiringScheduleArguments,
    AiringSchedule,
    ExtractMedia
} from "../typings";
import { MediaQuery } from "./media-query";

export interface AiringScheduleQuery<T> {
    fetch: ((raw?: false) => Promise<T extends AiringSchedule
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends AiringSchedule
            ? { data: { AiringSchedule: { [K in keyof T]: T[K] } } }
            : { data: { AiringSchedule: { id: number } } }>);
}

export class AiringScheduleQuery<T = {}> extends Base<AiringSchedule, AiringScheduleArguments> {
    protected override default: string = "id";
    protected override type: string = "AiringSchedule";
    protected override args: AiringScheduleArguments = {};
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(id?: number, oAuthToken?: string);
    public constructor(args?: AiringScheduleArguments, oAuthToken?: string);
    public constructor(params?: AiringScheduleArguments | number, oAuthToken?: string) {
        super(oAuthToken);
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    public withId(): AiringScheduleQuery<T & { id: Required<AiringSchedule>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public airingAt(): AiringScheduleQuery<T & { airingAt: Required<AiringSchedule>["airingAt"] }> {
        this.query.set("airingAt", void 0);
        return <never>this;
    }

    public timeUntilAiring(): AiringScheduleQuery<T & { timeUntilAiring: Required<AiringSchedule>["timeUntilAiring"] }> {
        this.query.set("timeUntilAiring", void 0);
        return <never>this;
    }

    public withEpisode(): AiringScheduleQuery<T & { episode: Required<AiringSchedule>["episode"] }> {
        this.query.set("episode", void 0);
        return <never>this;
    }

    public withMediaId(): AiringScheduleQuery<T & { mediaId: Required<AiringSchedule>["mediaId"] }> {
        this.query.set("mediaId", void 0);
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): AiringScheduleQuery<T & { media: ExtractMedia<M> }> {
        const { fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args: void 0, fields: [fields] });
        return <never>this;
    }
}