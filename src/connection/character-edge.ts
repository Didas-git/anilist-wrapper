import { MediaQuery, CharacterQuery } from "../queries";
import { AddCharacterEdge, ExtractCharacter, ExtractMedia, ICharacterEdge } from "../typings";
import { Edge } from "./edge";

export interface CharacterEdge<T> {
    withNode: <K extends CharacterQuery>(node: K | ((node: CharacterQuery) => K)) => CharacterEdge<T & { node: ExtractCharacter<K> }>;
}

export class CharacterEdge<T = {}> extends Edge<CharacterQuery, ICharacterEdge> {
    public constructor() {
        super(new CharacterQuery());
    }

    public withId(): CharacterEdge<AddCharacterEdge<T, "id">> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withRole(): CharacterEdge<AddCharacterEdge<T, "role">> {
        this.query.set("role", void 0);
        return <never>this;
    }

    public withName(): CharacterEdge<AddCharacterEdge<T, "name">> {
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
        const { args, fields } = typeof media === "function" ? media(<never>new MediaQuery()).parse() : media.parse();

        this.query.set("media", { args, fields: [fields] });
        return <never>this;
    }

    public withFavouriteOrder(): CharacterEdge<AddCharacterEdge<T, "favouriteOrder">> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}