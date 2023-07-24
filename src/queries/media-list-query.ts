import { Query } from "./query";

import type {
    ExtractMedia,
    MediaList, MediaListArguments, ScoreFormat
} from "../typings";
import { MediaQuery } from "./media-query";

export interface MediaListQuery<T> {
    fetch: ((raw?: false) => Promise<T extends MediaList
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends MediaList
            ? { data: { MediaList: { [K in keyof T]: T[K] } } }
            : { data: { MediaList: { id: number } } }>);
}

export class MediaListQuery<T = {}> extends Query<MediaList, MediaListArguments> {
    protected default: string = "id";
    protected type: string = "MediaList";
    protected args: MediaListArguments = { type: "ANIME" };

    public constructor(id?: number, oAuthToken?: string);
    public constructor(args?: MediaListArguments, oAuthToken?: string);
    public constructor(params?: MediaListArguments | number, oAuthToken?: string) {
        super(oAuthToken);
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    public withId(): MediaListQuery<T & { id: Required<MediaList>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withUserId(): MediaListQuery<T & { userId: Required<MediaList>["userId"] }> {
        this.query.set("userId", void 0);
        return <never>this;
    }

    public withMediaId(): MediaListQuery<T & { mediaId: Required<MediaList>["mediaId"] }> {
        this.query.set("mediaId", void 0);
        return <never>this;
    }

    public withStatus(): MediaListQuery<T & { status: Required<MediaList>["status"] }> {
        this.query.set("status", void 0);
        return <never>this;
    }

    public withScore(format?: ScoreFormat): MediaListQuery<T & { score: Required<MediaList>["score"] }> {
        this.query.set("score", { args: format ? { format } : void 0, fields: void 0 });
        return <never>this;
    }

    public withProgress(): MediaListQuery<T & { progress: Required<MediaList>["progress"] }> {
        this.query.set("progress", void 0);
        return <never>this;
    }

    public withProgressVolumes(): MediaListQuery<T & { progressVolumes: Required<MediaList>["progressVolumes"] }> {
        this.query.set("progressVolumes", void 0);
        return <never>this;
    }

    public withRepeat(): MediaListQuery<T & { repeat: Required<MediaList>["repeat"] }> {
        this.query.set("repeat", void 0);
        return <never>this;
    }

    public withPriority(): MediaListQuery<T & { priority: Required<MediaList>["priority"] }> {
        this.query.set("priority", void 0);
        return <never>this;
    }

    public withPrivate(): MediaListQuery<T & { private: Required<MediaList>["private"] }> {
        this.query.set("private", void 0);
        return <never>this;
    }

    public withNotes(): MediaListQuery<T & { notes: Required<MediaList>["notes"] }> {
        this.query.set("notes", void 0);
        return <never>this;
    }

    public hiddenFromStatusLists(): MediaListQuery<T & { hiddenFromStatusLists: Required<MediaList>["hiddenFromStatusLists"] }> {
        this.query.set("hiddenFromStatusLists", void 0);
        return <never>this;
    }

    public withCustomLists(asArray?: boolean): MediaListQuery<T & { customLists: Required<MediaList>["customLists"] }> {
        this.query.set("customLists", { args: asArray ? { asArray } : void 0, fields: void 0 });
        return <never>this;
    }

    public withAdvancedScores(): MediaListQuery<T & { advancedScores: Required<MediaList>["advancedScores"] }> {
        this.query.set("advancedScores", void 0);
        return <never>this;
    }

    public startedAt(): MediaListQuery<T & { startedAt: Required<MediaList>["startedAt"] }> {
        this.query.set("startedAt", void 0);
        return <never>this;
    }

    public completedAt(): MediaListQuery<T & { completedAt: Required<MediaList>["completedAt"] }> {
        this.query.set("completedAt", void 0);
        return <never>this;
    }

    public updatedAt(): MediaListQuery<T & { updatedAt: Required<MediaList>["updatedAt"] }> {
        this.query.set("updatedAt", void 0);
        return <never>this;
    }

    public createdAt(): MediaListQuery<T & { createdAt: Required<MediaList>["createdAt"] }> {
        this.query.set("createdAt", void 0);
        return <never>this;
    }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): MediaListQuery<T & { media: ExtractMedia<M> }> {
        const { fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args: void 0, fields: [fields] });
        return <never>this;
    }

    //! PENDING!!!
    // public withUser() {}
}