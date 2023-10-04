import { Base } from "../base";
import { MediaListQuery } from "./media-list-query";

import type { MediaListGroup } from "../typings";

export interface MediaListGroupQuery<T> {
    fetch: ((raw?: false) => Promise<T extends MediaListGroup
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends MediaListGroup
            ? { data: { MediaListGroup: { [K in keyof T]: T[K] } } }
            : { data: { MediaListGroup: { id: number } } }>);
}

export class MediaListGroupQuery<T = {}> extends Base<MediaListGroup, never> {
    protected override default: string = "name";
    protected override type: string = "MediaListGroup";
    protected override args: Record<PropertyKey, any> | undefined;
    protected override queryOrMutation: "query" | "mutation" = "query";

    public withEntries<P extends MediaListQuery, K extends MediaListQuery>(mediaList: K | ((mediaList: P) => K)): MediaListGroupQuery<T & { entries: Required<MediaListGroup>["entries"] }> {
        const { args, fields } = typeof mediaList === "function" ? mediaList(<P>new MediaListQuery()).parse() : mediaList.parse();

        this.query.set("entries", { args, fields: [fields] });
        return <never>this;
    }

    public withName(): MediaListGroupQuery<T & { name: Required<MediaListGroup>["name"] }> {
        this.query.set("name", void 0);
        return <never>this;
    }

    public isCustomList(): MediaListGroupQuery<T & { isCustomList: Required<MediaListGroup>["isCustomList"] }> {
        this.query.set("isCustomList", void 0);
        return <never>this;
    }

    public isSplitCompletedList(): MediaListGroupQuery<T & { isSplitCompletedList: Required<MediaListGroup>["isSplitCompletedList"] }> {
        this.query.set("isSplitCompletedList", void 0);
        return <never>this;
    }

    public withStatus(): MediaListGroupQuery<T & { status: Required<MediaListGroup>["status"] }> {
        this.query.set("status", void 0);
        return <never>this;
    }
}