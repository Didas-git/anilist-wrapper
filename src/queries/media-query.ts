import { CharacterQuery } from "./character-query";
import { CharacterEdge, StudioEdge } from "../connection";
import { MediaEdge } from "../connection/media-edge";
import { PageInfo } from "../connection/page-info";
import { Query } from "./query";
import {
    AiringSchedule,
    Media,
    MediaArguments,
    MediaCoverImage,
    MediaExternalLink,
    MediaRank,
    MediaStreamingEpisode,
    MediaTag,
    MediaTitle,
    MediaTrailer,
    MediaList,
    // AddMedia,
    FuzzyDate,
    MapRelation,
    ExtractPageInfo,
    ExtractMedia,
    ExtractMediaEdge,
    ExtractCharacter,
    ExtractCharacterEdge,
    CharacterSort,
    CharacterRole,
    StudioSort,
    ExtractStudio,
    ExtractStudioEdge
} from "../typings";
import { StudioQuery } from ".";

export interface MediaQuery<T> {
    fetch: ((raw?: false) => Promise<T extends Media
        ? { [K in keyof T]: T[K] }
        : { id: number }>) & ((raw?: true) => Promise<T extends Media
            ? { data: { Media: { [K in keyof T]: T[K] } } }
            : { data: { Media: { id: number } } }>);
}

export class MediaQuery<T = {}> extends Query<Media, MediaArguments> {
    protected default: string = "id";
    protected type: string = "Media";
    protected args: MediaArguments = { type: "ANIME" };

    public constructor(name?: string);
    public constructor(args?: MediaArguments);
    public constructor(params?: MediaArguments | string) {
        super();
        if (params === undefined) return;
        if (typeof params === "string") this.args.search = params;
        else this.args = params;
    }

    public withId(): MediaQuery<T & { id: Required<Media>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withMalId(): MediaQuery<T & { idMal: Required<Media>["idMal"] }> {
        this.query.set("idMal", void 0);
        return <never>this;
    }

    public withTitles(...args: Array<keyof MediaTitle>): MediaQuery<T & { title: Required<Media>["title"] }> {
        this.query.set("title", args.length ? args : ["romaji"]);
        return <never>this;
    }

    public withType(): MediaQuery<T & { type: Required<Media>["type"] }> {
        this.query.set("type", void 0);
        return <never>this;
    }

    public withFormat(): MediaQuery<T & { format: Required<Media>["format"] }> {
        this.query.set("format", void 0);
        return <never>this;
    }

    public withStatus(version?: number): MediaQuery<T & { status: Required<Media>["status"] }> {
        this.query.set("status", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    public withDescription(asHtml?: boolean): MediaQuery<T & { description: Required<Media>["description"] }> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    public withStartDate(...args: Array<keyof FuzzyDate>): MediaQuery<T & { startDate: Required<Media>["startDate"] }> {
        this.query.set("startDate", args.length ? args : ["year", "month", "day"]);
        return <never>this;
    }

    public withEndDate(...args: Array<keyof FuzzyDate>): MediaQuery<T & { endDate: Required<Media>["endDate"] }> {
        this.query.set("endDate", args.length ? args : ["year", "month", "day"]);
        return <never>this;
    }

    public withSeason(): MediaQuery<T & { season: Required<Media>["season"] }> {
        this.query.set("season", void 0);
        return <never>this;
    }

    public withSeasonYear(): MediaQuery<T & { seasonYear: Required<Media>["seasonYear"] }> {
        this.query.set("seasonYear", void 0);
        return <never>this;
    }

    public withSeasonInt(): MediaQuery<T & { seasonInt: Required<Media>["seasonInt"] }> {
        this.query.set("seasonInt", void 0);
        return <never>this;
    }

    public withEpisodes(): MediaQuery<T & { episodes: Required<Media>["episodes"] }> {
        this.query.set("episodes", void 0);
        return <never>this;
    }

    public withDuration(): MediaQuery<T & { duration: Required<Media>["duration"] }> {
        this.query.set("duration", void 0);
        return <never>this;
    }

    public withChapters(): MediaQuery<T & { chapters: Required<Media>["chapters"] }> {
        this.query.set("chapters", void 0);
        return <never>this;
    }

    public withVolumes(): MediaQuery<T & { volumes: Required<Media>["volumes"] }> {
        this.query.set("volumes", void 0);
        return <never>this;
    }

    public withCountryOfOrigin(): MediaQuery<T & { countryOfOrigin: Required<Media>["countryOfOrigin"] }> {
        this.query.set("countryOfOrigin", void 0);
        return <never>this;
    }

    public isLicensed(): MediaQuery<T & { isLicensed: Required<Media>["isLicensed"] }> {
        this.query.set("isLicensed", void 0);
        return <never>this;
    }

    public withSource(version?: number): MediaQuery<T & { source: Required<Media>["source"] }> {
        this.query.set("source", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    public withTwitterHashtag(): MediaQuery<T & { hashtag: Required<Media>["hashtag"] }> {
        this.query.set("hashtag", void 0);
        return <never>this;
    }

    public withTrailer(...args: Array<keyof MediaTrailer>): MediaQuery<T & { trailer: Required<Media>["trailer"] }> {
        this.query.set("trailer", args.length ? args : ["id"]);
        return <never>this;
    }

    public updatedAt(): MediaQuery<T & { updatedAt: Required<Media>["updatedAt"] }> {
        this.query.set("updatedAt", void 0);
        return <never>this;
    }

    public withCoverImage(...args: Array<keyof MediaCoverImage>): MediaQuery<T & { coverImage: Required<Media>["coverImage"] }> {
        this.query.set("coverImage", args.length ? args : ["extraLarge", "large", "medium", "color"]);
        return <never>this;
    }

    public withBannerImage(): MediaQuery<T & { bannerImage: Required<Media>["bannerImage"] }> {
        this.query.set("bannerImage", void 0);
        return <never>this;
    }

    public withGenres(): MediaQuery<T & { genres: Required<Media>["genres"] }> {
        this.query.set("genres", void 0);
        return <never>this;
    }

    public withSynonyms(): MediaQuery<T & { synonyms: Required<Media>["synonyms"] }> {
        this.query.set("synonyms", void 0);
        return <never>this;
    }

    public withAverageScore(): MediaQuery<T & { averageScore: Required<Media>["averageScore"] }> {
        this.query.set("averageScore", void 0);
        return <never>this;
    }

    public withMeanScore(): MediaQuery<T & { meanScore: Required<Media>["meanScore"] }> {
        this.query.set("meanScore", void 0);
        return <never>this;
    }

    public withPopularity(): MediaQuery<T & { popularity: Required<Media>["popularity"] }> {
        this.query.set("popularity", void 0);
        return <never>this;
    }

    public isLocked(): MediaQuery<T & { isLocked: Required<Media>["isLocked"] }> {
        this.query.set("isLocked", void 0);
        return <never>this;
    }

    public withTrending(): MediaQuery<T & { trending: Required<Media>["trending"] }> {
        this.query.set("trending", void 0);
        return <never>this;
    }

    public withFavourites(): MediaQuery<T & { favourites: Required<Media>["favourites"] }> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    public withTags(...args: Array<keyof MediaTag>): MediaQuery<T & { tags: Required<Media>["tags"] }> {
        this.query.set("tags", args.length ? args : ["id"]);
        return <never>this;
    }

    public withRelations<E extends MediaEdge, M extends MediaQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: MediaEdge) => E),
        nodes?: M | ((node: MediaQuery) => M),
        pageInfo?: P | ((page: PageInfo) => P)
    }): MediaQuery<T & MapRelation<ExtractMediaEdge<E>, ExtractMedia<M>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("relations", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new MediaEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new MediaQuery({})).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("relations", arr.length ? arr : ["edges { id }"]);
        return <never>this;
    }

    public withCharacters<E extends CharacterEdge, C extends CharacterQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: CharacterEdge) => E),
        nodes?: C | ((node: CharacterQuery) => C),
        pageInfo?: P | ((page: PageInfo) => P),
        args?: {
            sort?: Array<CharacterSort>,
            role?: CharacterRole,
            page?: number,
            perPage?: number
        }
    }): MediaQuery<T & MapRelation<ExtractCharacterEdge<E>, ExtractCharacter<C>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("characters", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new CharacterEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new CharacterQuery()).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("characters", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    //! PENDING!!!
    // public withStaff() {}

    public withStudios<E extends StudioEdge, S extends StudioQuery, P extends PageInfo>(options?: {
        edges?: E | ((edge: StudioEdge) => E),
        nodes?: S | ((node: StudioQuery) => S),
        pageInfo?: P | ((page: PageInfo) => P),
        args?: {
            sort?: Array<StudioSort>,
            isMain?: boolean
        }
    }): MediaQuery<T & MapRelation<ExtractStudioEdge<E>, ExtractStudio<S>, ExtractPageInfo<P>>> {
        if (!options) {
            this.query.set("studios", ["edges { id }"]);
            return <never>this;
        }

        const arr: Array<string> = [];
        const edges = typeof options.edges === "function" ? options.edges(new StudioEdge()).parse() : options.edges?.parse();
        const nodes = typeof options.nodes === "function" ? options.nodes(new StudioQuery()).parse() : options.nodes?.parse();
        const pageInfo = typeof options.pageInfo === "function" ? options.pageInfo(new PageInfo()).parse() : options.pageInfo?.parse();

        edges && arr.push(`edges { ${edges.fields} }`);
        nodes && arr.push(`nodes { ${nodes.fields} }`);
        pageInfo && arr.push(`pageInfo { ${pageInfo.fields} }`);

        this.query.set("studios", { args: options.args, fields: arr.length ? arr : ["edges { id }"] });
        return <never>this;
    }

    public isFavourite(): MediaQuery<T & { isFavourite: Required<Media>["isFavourite"] }> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    public isFavouriteBlocked(): MediaQuery<T & { isFavouriteBlocked: Required<Media>["isFavouriteBlocked"] }> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    public isAdult(): MediaQuery<T & { isAdult: Required<Media>["isAdult"] }> {
        this.query.set("isAdult", void 0);
        return <never>this;
    }

    public withNextAiringEpisode(...args: Array<keyof AiringSchedule>): MediaQuery<T & { nextAiringEpisode: Required<Media>["nextAiringEpisode"] }> {
        this.query.set("nextAiringEpisode", args.length ? args : ["id"]);
        return <never>this;
    }

    //! PENDING!!!
    // public withAiringSchedule() {}
    //! PENDING!!!
    // public withTrends() {}

    public withExternalLinks(...args: Array<keyof MediaExternalLink>): MediaQuery<T & { externalLinks: Required<Media>["externalLinks"] }> {
        this.query.set("externalLinks", args.length ? args : ["id"]);
        return <never>this;
    }

    public withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): MediaQuery<T & { streamingEpisodes: Required<Media>["streamingEpisodes"] }> {
        this.query.set("streamingEpisodes", args.length ? args : ["title, thumbnail", "url", "site"]);
        return <never>this;
    }

    public withRankings(...args: Array<keyof MediaRank>): MediaQuery<T & { rankings: Required<Media>["rankings"] }> {
        this.query.set("rankings", args.length ? args : ["id"]);
        return <never>this;
    }

    public withMediaListEntries(...args: Array<keyof MediaList>): MediaQuery<T & { mediaListEntry: Required<Media>["mediaListEntry"] }> {
        this.query.set("mediaListEntry", args.length ? args : ["id"]);
        return <never>this;
    }

    //! PENDING!!!
    // public withReviews() {}
    //! PENDING!!!
    // public withRecommendations() {}
    //! PENDING!!!
    // public withStats() {}

    public withSiteUrl(): MediaQuery<T & { siteUrl: Required<Media>["siteUrl"] }> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    public withAutoCreateForumThread(): MediaQuery<T & { autoCreateForumThread: Required<Media>["autoCreateForumThread"] }> {
        this.query.set("autoCreateForumThread", void 0);
        return <never>this;
    }

    public isRecommendationBlocked(): MediaQuery<T & { isRecommendationBlocked: Required<Media>["isRecommendationBlocked"] }> {
        this.query.set("isRecommendationBlocked", void 0);
        return <never>this;
    }

    public isReviewBlocked(): MediaQuery<T & { isReviewBlocked: Required<Media>["isReviewBlocked"] }> {
        this.query.set("isReviewBlocked", void 0);
        return <never>this;
    }

    public withModNotes(): MediaQuery<T & { modNotes: Required<Media>["modNotes"] }> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}