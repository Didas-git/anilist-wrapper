import { CharacterEdge, MediaEdge, PageInfo } from "../connection";
import { MediaQuery } from "./media-query";
import { Query } from "./query";
import {
    Staff,
    StaffArguments,
    ExtractMedia,
    ExtractMediaEdge,
    ExtractPageInfo,
    MapRelation,
    MediaSort,
    MediaType
} from "../typings";
import { CharacterQuery } from "./character-query";

export interface StaffQuery<T> {
    fetch: ((raw?: false) => Promise<T extends Staff
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends Staff
            ? { data: { Staff: { [K in keyof T]: T[K] } } }
            : { data: { Staff: { id: number } } }>);
}

export class StaffQuery<T = {}> extends Query<Staff, StaffArguments> {
    protected args: StaffArguments = {};
    protected default: string = "id";
    protected type: string = "Staff";

    public constructor(id?: number);
    public constructor(args?: StaffArguments);
    public constructor(params?: StaffArguments | number) {
        super();
        if (params === undefined) return;
        if (typeof params === "number") this.args.id = params;
        else this.args = params;
    }

    public withId(): StaffQuery<T & { id: Required<Staff>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withName(): StaffQuery<T & { name: Required<Staff>["name"] }> {
        this.query.set("name", void 0);
        return <never>this;
    }

    public withLanguageV2(): StaffQuery<T & { languageV2: Required<Staff>["languageV2"] }> {
        this.query.set("languageV2", void 0);
        return <never>this;
    }

    public withImage(): StaffQuery<T & { image: Required<Staff>["image"] }> {
        this.query.set("image", void 0);
        return <never>this;
    }

    public withDescription(asHtml?: boolean): StaffQuery<T & { description: Required<Staff>["description"] }> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    public withPrimaryOccupations(): StaffQuery<T & { primaryOccupations: Required<Staff>["primaryOccupations"] }> {
        this.query.set("primaryOccupations", void 0);
        return <never>this;
    }

    public withGender(): StaffQuery<T & { gender: Required<Staff>["gender"] }> {
        this.query.set("gender", void 0);
        return <never>this;
    }

    public withDateOfBirth(): StaffQuery<T & { dateOfBirth: Required<Staff>["dateOfBirth"] }> {
        this.query.set("dateOfBirth", void 0);
        return <never>this;
    }

    public withDateOfDeath(): StaffQuery<T & { dateOfDeath: Required<Staff>["dateOfDeath"] }> {
        this.query.set("dateOfDeath", void 0);
        return <never>this;
    }

    public withAge(): StaffQuery<T & { age: Required<Staff>["age"] }> {
        this.query.set("age", void 0);
        return <never>this;
    }

    public withYearsActive(): StaffQuery<T & { yearsActive: Required<Staff>["yearsActive"] }> {
        this.query.set("yearsActive", void 0);
        return <never>this;
    }

    public withHomeTown(): StaffQuery<T & { homeTown: Required<Staff>["homeTown"] }> {
        this.query.set("homeTown", void 0);
        return <never>this;
    }

    public withBloodType(): StaffQuery<T & { bloodType: Required<Staff>["bloodType"] }> {
        this.query.set("bloodType", void 0);
        return <never>this;
    }

    public isFavourite(): StaffQuery<T & { isFavourite: Required<Staff>["isFavourite"] }> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    public isFavouriteBlocked(): StaffQuery<T & { isFavouriteBlocked: Required<Staff>["isFavouriteBlocked"] }> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    public withSiteUrl(): StaffQuery<T & { siteUrl: Required<Staff>["siteUrl"] }> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    public withStaffMedia<E extends MediaEdge, M extends MediaQuery, P extends PageInfo>(options?: {
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
    }): StaffQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("staffMedia", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("staffMedia", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public withCharacters<E extends CharacterEdge, M extends CharacterQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: CharacterEdge) => E),
        nodes?: M | ((node: CharacterQuery) => M),
        pageInfo?: P | ((page: PageInfo) => P),
        args?: {
            sort?: Array<MediaSort>,
            type?: MediaType,
            onList?: boolean,
            page?: number,
            perPage?: number
        }
    }): StaffQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("characters", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new CharacterEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new CharacterQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("characters", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public withCharacterMedia<E extends MediaEdge, M extends MediaQuery, P extends PageInfo>(options?: {
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
    }): StaffQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("characterMedia", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("characterMedia", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public withStaff(): StaffQuery<T & { staff: Required<Staff>["staff"] }> {
        this.query.set("staff", void 0);
        return <never>this;
    }

    public withSubmitter(): StaffQuery<T & { submitter: Required<Staff>["submitter"] }> {
        this.query.set("submitter", void 0);
        return <never>this;
    }

    public withSubmissionStatus(): StaffQuery<T & { submissionStatus: Required<Staff>["submissionStatus"] }> {
        this.query.set("submissionStatus", void 0);
        return <never>this;
    }

    public withSubmissionNotes(): StaffQuery<T & { submissionNotes: Required<Staff>["submissionNotes"] }> {
        this.query.set("submissionNotes", void 0);
        return <never>this;
    }

    public withFavourites(): StaffQuery<T & { favourites: Required<Staff>["favourites"] }> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    public withModNotes(): StaffQuery<T & { modNotes: Required<Staff>["modNotes"] }> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}