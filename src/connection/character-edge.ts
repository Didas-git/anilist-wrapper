import { MediaQuery, CharacterQuery } from "../queries";
import { Edge } from "./edge";

import type { ExtractCharacter, ExtractMedia, ICharacterEdge } from "../typings";

export interface CharacterEdge<T> {
    withNode: <K extends CharacterQuery>(node: K | ((node: CharacterQuery) => K)) => CharacterEdge<T & { node: ExtractCharacter<K> }>;
}

export class CharacterEdge<T = {}> extends Edge<CharacterQuery, ICharacterEdge> {
    public constructor() {
        super(new CharacterQuery());
    }

    public withId(): CharacterEdge<T & { id: Required<ICharacterEdge>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withRole(): CharacterEdge<T & { role: Required<ICharacterEdge>["role"] }> {
        this.query.set("role", void 0);
        return <never>this;
    }

    public withName(): CharacterEdge<T & { name: Required<ICharacterEdge>["name"] }> {
        this.query.set("name", void 0);
        return <never>this;
    }

    //! PENDING!!!
    // withVoiceActors() {

    // }

    //! PENDING!!!
    // withVoiceActorRoles() {

    // }

    public withMedia<M extends MediaQuery>(media: M | ((media: MediaQuery) => M)): CharacterEdge<T & { media: Array<ExtractMedia<M>> }> {
        const { args, fields } = typeof media === "function" ? media(new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args, fields: [fields] });
        return <never>this;
    }

    public withFavouriteOrder(): CharacterEdge<T & { favouriteOrder: Required<ICharacterEdge>["favouriteOrder"] }> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}