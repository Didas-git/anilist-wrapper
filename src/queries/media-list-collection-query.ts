import { Base } from "../base";
import { MediaListGroupQuery } from "./media-list-group";

import type {
    MediaListCollectionArguments,
    MediaListCollection
} from "../typings";

export interface MediaListCollectionQuery<T> {
    fetch: ((raw?: false) => Promise<
        keyof T extends never
        ? { hasNextChunk: boolean }
        : { [K in keyof T]: T[K] }
    >) & ((raw?: true) => Promise<
        keyof T extends never
        ? { data: { MediaListCollection: { hasNextChunk: boolean } } }
        : { data: { MediaListCollection: { [K in keyof T]: T[K] } } }
    >);
}

export class MediaListCollectionQuery<T = {}> extends Base<MediaListCollection, MediaListCollectionArguments> {
    protected override default: string = "hasNextChunk";
    protected override type: string = "MediaListCollection";
    protected override args: MediaListCollectionArguments = { type: "ANIME" };
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(name: string, oAuthToken?: string);
    public constructor(args: MediaListCollectionArguments, oAuthToken?: string);
    public constructor(params: MediaListCollectionArguments | string, oAuthToken?: string) {
        super(oAuthToken);
        if (typeof params === "string") this.args.userName = params;
        else this.args = params;
    }

    public withLists<M extends MediaListGroupQuery>(mediaGroup: M | ((mediaGroup: MediaListGroupQuery) => M)): MediaListCollectionQuery<T & { lists: Required<MediaListCollection>["lists"] }> {
        const { args, fields } = typeof mediaGroup === "function" ? mediaGroup(new MediaListGroupQuery()).parse() : mediaGroup.parse();

        this.query.set("lists", { args, fields: [fields] });
        return <never>this;
    }

    //! PENDING!!!
    // public withUser() {}

    public hasNextChunk(): MediaListCollectionQuery<T & { hasNextChunk: Required<MediaListCollection>["hasNextChunk"] }> {
        this.query.set("hasNextChunk", void 0);
        return <never>this;
    }
}