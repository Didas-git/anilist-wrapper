import { MediaEdge, PageInfo } from "../connection";
import { MediaQuery } from "./media-query";
import { Query } from "./query";

import type {
    CharacterArguments,
    ExtractMediaEdge,
    ExtractPageInfo,
    ExtractMedia,
    MapRelation,
    Character,
    MediaSort,
    MediaType
} from "../typings";

export interface CharacterQuery<T> {
    fetch: ((raw?: false) => Promise<T extends Character
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends Character
            ? { data: { Character: { [K in keyof T]: T[K] } } }
            : { data: { Character: { id: number } } }>);
}

export class CharacterQuery<T = {}> extends Query<Character, CharacterArguments> {
    protected args: CharacterArguments = {};
    protected default: string = "id";
    protected type: string = "Character";

    public constructor(id?: number);
    public constructor(args?: CharacterArguments);
    public constructor(params?: CharacterArguments | number) {
        super();
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    public withId(): CharacterQuery<T & { id: Required<Character>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withName(): CharacterQuery<T & { name: Required<Character>["name"] }> {
        this.query.set("name", void 0);
        return <never>this;
    }

    public withImage(): CharacterQuery<T & { image: Required<Character>["image"] }> {
        this.query.set("image", void 0);
        return <never>this;
    }

    public withDescription(asHtml?: boolean): CharacterQuery<T & { description: Required<Character>["description"] }> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    public withGender(): CharacterQuery<T & { gender: Required<Character>["gender"] }> {
        this.query.set("gender", void 0);
        return <never>this;
    }

    public withDateOfBirth(): CharacterQuery<T & { dateOfBirth: Required<Character>["dateOfBirth"] }> {
        this.query.set("dateOfBirth", void 0);
        return <never>this;
    }

    public withAge(): CharacterQuery<T & { age: Required<Character>["age"] }> {
        this.query.set("age", void 0);
        return <never>this;
    }

    public withBloodType(): CharacterQuery<T & { bloodType: Required<Character>["bloodType"] }> {
        this.query.set("bloodType", void 0);
        return <never>this;
    }

    public isFavourite(): CharacterQuery<T & { isFavourite: Required<Character>["isFavourite"] }> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    public isFavouriteBlocked(): CharacterQuery<T & { isFavouriteBlocked: Required<Character>["isFavouriteBlocked"] }> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    public withSiteUrl(): CharacterQuery<T & { siteUrl: Required<Character>["siteUrl"] }> {
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
    }): CharacterQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("media", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("media", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public withFavourites(): CharacterQuery<T & { favourites: Required<Character>["favourites"] }> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    public withModNotes(): CharacterQuery<T & { modNotes: Required<Character>["modNotes"] }> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}