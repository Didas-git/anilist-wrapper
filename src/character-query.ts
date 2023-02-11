import { MediaEdge, PageInfo } from "./connection";
import { MediaQuery } from "./media-query";
import { Query } from "./query";
import {
    AddCharacter,
    Character,
    CharacterArguments,
    MapRelation,
    MediaSort,
    MediaType
} from "./typings";

export class CharacterQuery<T = {}> extends Query<Character, CharacterArguments> {
    protected args: CharacterArguments = {};
    protected default: string = "id";
    protected type: string = "Character";

    constructor(id?: number)
    constructor(args?: CharacterArguments)
    constructor(params?: CharacterArguments | number) {
        super();
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    protected buildQuery() {
        const { args, fields } = this.parse()
        return `query{Character(${args}){${fields}}}`
    }

    public withId(): CharacterQuery<AddCharacter<T, "id">> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withName(): CharacterQuery<AddCharacter<T, "name">> {
        this.query.set("name", void 0);
        return <never>this;
    }

    public withImage(): CharacterQuery<AddCharacter<T, "image">> {
        this.query.set("image", void 0);
        return <never>this;
    }

    public withDescription(asHtml?: boolean): CharacterQuery<AddCharacter<T, "description">> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    public withGender(): CharacterQuery<AddCharacter<T, "gender">> {
        this.query.set("gender", void 0);
        return <never>this;
    }

    public withDateOfBirth(): CharacterQuery<AddCharacter<T, "dateOfBirth">> {
        this.query.set("dateOfBirth", void 0);
        return <never>this;
    }

    public withAge(): CharacterQuery<AddCharacter<T, "age">> {
        this.query.set("age", void 0);
        return <never>this;
    }

    public withBloodType(): CharacterQuery<AddCharacter<T, "bloodType">> {
        this.query.set("bloodType", void 0);
        return <never>this;
    }

    public isFavourite(): CharacterQuery<AddCharacter<T, "isFavourite">> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    public isFavouriteBlocked(): CharacterQuery<AddCharacter<T, "isFavouriteBlocked">> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    public withSiteUrl(): CharacterQuery<AddCharacter<T, "siteUrl">> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    public withMedia<E extends MediaEdge, M extends MediaQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: MediaEdge) => E),
        nodes?: M | ((node: MediaQuery) => M),
        pageInfo?: P | ((page: PageInfo) => P),
        args?: {
            sort?: Array<MediaSort>,
            type?: MediaType,
            onList?: boolean,
            page?: number,
            perPage?: number
        }
    }): MediaQuery<T & MapRelation<E, M, P>> {
        if (!options) {
            this.query.set("media", [`edges { id }`])
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options?.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options?.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options?.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`)

        this.query.set("media", { args: options.args, fields: arr.length ? arr : [`edges { id }`] });
        return <never>this;
    }

    public withFavourites(): CharacterQuery<AddCharacter<T, "favourites">> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    public withModNotes(): CharacterQuery<AddCharacter<T, "modNotes">> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}