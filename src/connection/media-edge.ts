import { MediaQuery } from "../queries";
import { Edge } from "./edge";

import type { ExtractMedia, IMediaEdge } from "../typings";

export interface MediaEdge<T> {
    withNode: <K extends MediaQuery>(node: K | ((node: MediaQuery) => K)) => MediaEdge<T & { node: ExtractMedia<K> }>;
}

export class MediaEdge<T = {}> extends Edge<MediaQuery, IMediaEdge> {
    public constructor() {
        super(new MediaQuery({}));
    }

    public withId(): MediaEdge<T & { id: Required<IMediaEdge>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withRelationType(version?: number): MediaEdge<T & { relationType: Required<IMediaEdge>["relationType"] }> {
        this.query.set("relationType", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    public isMainStudio(): MediaEdge<T & { isMainStudio: Required<IMediaEdge>["isMainStudio"] }> {
        this.query.set("isMainStudio", void 0);
        return <never>this;
    }

    //! PENDING!!!
    // withCharacters() {

    // }

    public withCharacterRole(): MediaEdge<T & { characterRole: Required<IMediaEdge>["characterRole"] }> {
        this.query.set("characterRole", void 0);
        return <never>this;
    }

    public withCharacterName(): MediaEdge<T & { characterName: Required<IMediaEdge>["characterName"] }> {
        this.query.set("characterName", void 0);
        return <never>this;
    }

    public withRoleNotes(): MediaEdge<T & { roleNotes: Required<IMediaEdge>["roleNotes"] }> {
        this.query.set("roleNotes", void 0);
        return <never>this;
    }

    public withDubGroups(): MediaEdge<T & { dubGroup: Required<IMediaEdge>["dubGroup"] }> {
        this.query.set("dubGroup", void 0);
        return <never>this;
    }

    public withStaffRole(): MediaEdge<T & { staffRole: Required<IMediaEdge>["staffRole"] }> {
        this.query.set("staffRole", void 0);
        return <never>this;
    }

    //! PENDING!!!
    // withVoiceActors() {

    // }

    //! PENDING!!!
    // withVoiceActorRoles() {

    // }

    public withFavouriteOrder(): MediaEdge<T & { favouriteOrder: Required<IMediaEdge>["favouriteOrder"] }> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}