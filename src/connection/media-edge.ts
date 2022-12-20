import { MediaQuery } from "../media-query";
import { AddMediaEdge, ExtractMedia, IMediaEdge } from "../typings";
import { Edge } from "./edge";

export interface MediaEdge<T> {
    withNode<K extends MediaQuery>(node: K | ((node: MediaQuery) => K)): MediaEdge<T & { node: ExtractMedia<K> }>
}

export class MediaEdge<T = {}> extends Edge<MediaQuery, IMediaEdge> {

    constructor() {
        super(new MediaQuery({}))
    }
    public withId(): MediaEdge<AddMediaEdge<T, "id">> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withRelationType(version?: number): MediaEdge<AddMediaEdge<T, "relationType">> {
        this.query.set("relationType", { args: version ? { version } : void 0, fields: void 0 })
        return <never>this;
    }

    public isMainStudio(): MediaEdge<AddMediaEdge<T, "isMainStudio">> {
        this.query.set("isMainStudio", void 0);
        return <never>this;
    }

    //! PENDING!!!
    // withCharacters() {

    // }

    public withCharacterRole(): MediaEdge<AddMediaEdge<T, "characterRole">> {
        this.query.set("characterRole", void 0);
        return <never>this;
    }

    public withCharacterName(): MediaEdge<AddMediaEdge<T, "characterName">> {
        this.query.set("characterName", void 0);
        return <never>this;
    }

    public withRoleNotes(): MediaEdge<AddMediaEdge<T, "roleNotes">> {
        this.query.set("roleNotes", void 0);
        return <never>this;
    }

    public withDubGroups(): MediaEdge<AddMediaEdge<T, "dubGroup">> {
        this.query.set("dubGroup", void 0);
        return <never>this;
    }

    public withStaffRole(): MediaEdge<AddMediaEdge<T, "staffRole">> {
        this.query.set("staffRole", void 0);
        return <never>this;
    }

    //! PENDING!!!
    // withVoiceActors() {

    // }

    //! PENDING!!!
    // withVoiceActorRoles() {

    // }

    public withFavouriteOrder(): MediaEdge<AddMediaEdge<T, "favouriteOrder">> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}