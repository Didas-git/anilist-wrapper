import { Base } from "../base";
import { MediaListGroupQuery } from "./media-list-group";

import type {
    MediaListCollectionArguments,
    MediaListCollection
} from "../typings";

export interface MediaListCollectionQuery<T> {
    fetch: ((raw?: false) => Promise<T extends MediaListCollection
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends MediaListCollection
            ? { data: { MediaListCollection: { [K in keyof T]: T[K] } } }
            : { data: { MediaListCollection: { id: number } } }>);
}

export class MediaListCollectionQuery<T = {}> extends Base<MediaListCollection, MediaListCollectionArguments> {
    protected override default: string = `lists {
        name
    }`;

    protected override type: string = "MediaListCollection";
    protected override args: MediaListCollectionArguments = { type: "ANIME" };
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(name?: string, oAuthToken?: string);
    public constructor(args?: MediaListCollectionArguments, oAuthToken?: string);
    public constructor(params?: MediaListCollectionArguments | string, oAuthToken?: string) {
        super(oAuthToken);
        if (params === undefined) return;
        if (typeof params === "string") this.args.userName = params;
        else this.args = params;
    }

    public withLists<P extends MediaListGroupQuery, K extends MediaListGroupQuery>(mediaGroup: K | ((mediaGroup: P) => K)): MediaListCollectionQuery<T & { lists: Required<MediaListCollection>["lists"] }> {
        const { args, fields } = typeof mediaGroup === "function" ? mediaGroup(<P>new MediaListGroupQuery()).parse() : mediaGroup.parse();

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