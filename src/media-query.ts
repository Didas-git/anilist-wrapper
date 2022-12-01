import { Query } from "./base-query";
import {
    AiringSchedule,
    AiringScheduleEdge,
    Character,
    CharacterEdge,
    Media,
    MediaArguments,
    MediaCoverImage,
    MediaEdge,
    MediaExternalLink,
    MediaRank,
    MediaStreamingEpisode,
    MediaTag,
    MediaTitle,
    MediaTrailer,
    MediaTrend,
    MediaTrendEdge,
    PageInfo,
    Staff,
    StaffEdge,
    Studio,
    StudioEdge,
    MediaList,
    Review,
    ReviewEdge,
    RecommendationEdge,
    Recommendation,
    ScoreDistribution,
    StatusDistribution,
    Add,
    MediaArgs,
    FuzzyDate,
    InternalConnection,
    CharacterSort,
    CharacterRole,
    Complex,
    StaffSort,
    StudioSort,
    MediaTrendSort,
    RecommendationSort
} from "./typings";

type ReqMedia = Required<Media>

export interface MediaQuery<T> {
    fetch(raw?: false): Promise<T extends Media ? T : { id: number }>
    fetch(raw?: true): Promise<T extends Media ? { data: { Media: T } } : { data: { Media: { id: number } } }>
}

export class MediaQuery<T = { empty: never }> extends Query<Media> {
    protected options: MediaArguments = {
        type: "ANIME"
    };

    protected default: string = "id";
    protected type: string = "Media";
    constructor(name?: string, media?: Array<MediaArgs>)
    constructor(args?: MediaArguments, media?: Array<MediaArgs>)
    constructor(params?: MediaArguments | string, media?: Array<MediaArgs>) {
        super();

        if (typeof params === "string") this.options.search = params;
        else this.options = { ...this.options, ...params };

        this.createQueryOptions(media);
    }

    protected buildQuery() {
        const { args, fields } = this.preBuild()
        return `query {
    Media(${args}) {
        ${fields}
    }
}`
    };

    arguments(options: MediaArguments, override: boolean = false) {
        this.options = override ? options : { ...this.options, ...options }
        return this;
    }

    withId(): MediaQuery<Add<T, { id: ReqMedia["id"] }>> {
        this.query.set("id", void 0);
        return <never>this;
    }

    withMalId(): MediaQuery<Add<T, { idMal: ReqMedia["idMal"] }>> {
        this.query.set("idMal", void 0);
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): MediaQuery<Add<T, { title: ReqMedia["title"] }>> {
        this.query.set("title", args.length ? args : ["romaji"])
        return <never>this;
    }

    withType(): MediaQuery<Add<T, { type: ReqMedia["type"] }>> {
        this.query.set("type", void 0);
        return <never>this;
    }

    withFormat(): MediaQuery<Add<T, { format: ReqMedia["format"] }>> {
        this.query.set("format", void 0);
        return <never>this;
    }

    withStatus(version?: number): MediaQuery<Add<T, { status: ReqMedia["status"] }>> {
        this.query.set("status", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    withDescription(asHtml?: boolean): MediaQuery<Add<T, { description: ReqMedia["description"] }>> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    withStartDate(...args: Array<keyof FuzzyDate>): MediaQuery<Add<T, { startDate: ReqMedia["startDate"] }>> {
        this.query.set("startDate", args.length ? args : ["year", "month", "day"])
        return <never>this;
    }

    withEndDate(...args: Array<keyof FuzzyDate>): MediaQuery<Add<T, { endDate: ReqMedia["endDate"] }>> {
        this.query.set("endDate", args.length ? args : ["year", "month", "day"])
        return <never>this;
    }

    withSeason(): MediaQuery<Add<T, { season: ReqMedia["season"] }>> {
        this.query.set("season", void 0);
        return <never>this;
    }

    withSeasonYear(): MediaQuery<Add<T, { seasonYear: ReqMedia["seasonYear"] }>> {
        this.query.set("seasonYear", void 0);
        return <never>this;
    }

    withSeasonInt(): MediaQuery<Add<T, { seasonInt: ReqMedia["seasonInt"] }>> {
        this.query.set("seasonInt", void 0);
        return <never>this;
    }

    withEpisodes(): MediaQuery<Add<T, { episodes: ReqMedia["episodes"] }>> {
        this.query.set("episodes", void 0);
        return <never>this;
    }

    withDuration(): MediaQuery<Add<T, { duration: ReqMedia["duration"] }>> {
        this.query.set("duration", void 0);
        return <never>this;
    }

    withChapters(): MediaQuery<Add<T, { chapters: ReqMedia["chapters"] }>> {
        this.query.set("chapters", void 0);
        return <never>this;
    }

    withVolumes(): MediaQuery<Add<T, { volumes: ReqMedia["volumes"] }>> {
        this.query.set("volumes", void 0);
        return <never>this;
    }

    withCountryOfOrigin(): MediaQuery<Add<T, { countryOfOrigin: ReqMedia["countryOfOrigin"] }>> {
        this.query.set("countryOfOrigin", void 0);
        return <never>this;
    }

    isLicensed(): MediaQuery<Add<T, { isLicensed: ReqMedia["isLicensed"] }>> {
        this.query.set("isLicensed", void 0);
        return <never>this;
    }

    withSource(version?: number): MediaQuery<Add<T, { source: ReqMedia["source"] }>> {
        this.query.set("source", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    withTwitterHashtag(): MediaQuery<Add<T, { hashtag: ReqMedia["hashtag"] }>> {
        this.query.set("hashtag", void 0);
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): MediaQuery<Add<T, { trailer: ReqMedia["trailer"] }>> {
        this.query.set("trailer", args.length ? args : ["id"])
        return <never>this;
    }

    updatedAt(): MediaQuery<Add<T, { updatedAt: ReqMedia["updatedAt"] }>> {
        this.query.set("updatedAt", void 0);
        return <never>this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>): MediaQuery<Add<T, { coverImage: ReqMedia["coverImage"] }>> {
        this.query.set("coverImage", args.length ? args : ["extraLarge", "large", "medium", "color"])
        return <never>this;
    }

    withBannerImage(): MediaQuery<Add<T, { bannerImage: ReqMedia["bannerImage"] }>> {
        this.query.set("bannerImage", void 0);
        return <never>this;
    }

    withGenres(): MediaQuery<Add<T, { genres: ReqMedia["genres"] }>> {
        this.query.set("genres", void 0);
        return <never>this;
    }

    withSynonyms(): MediaQuery<Add<T, { synonyms: ReqMedia["synonyms"] }>> {
        this.query.set("synonyms", void 0);
        return <never>this;
    }

    withAverageScore(): MediaQuery<Add<T, { averageScore: ReqMedia["averageScore"] }>> {
        this.query.set("averageScore", void 0);
        return <never>this;
    }

    withMeanScore(): MediaQuery<Add<T, { meanScore: ReqMedia["meanScore"] }>> {
        this.query.set("meanScore", void 0);
        return <never>this;
    }

    withPopularity(): MediaQuery<Add<T, { popularity: ReqMedia["popularity"] }>> {
        this.query.set("popularity", void 0);
        return <never>this;
    }

    isLocked(): MediaQuery<Add<T, { isLocked: ReqMedia["isLocked"] }>> {
        this.query.set("isLocked", void 0);
        return <never>this;
    }

    withTrending(): MediaQuery<Add<T, { trending: ReqMedia["trending"] }>> {
        this.query.set("trending", void 0);
        return <never>this;
    }

    withFavourites(): MediaQuery<Add<T, { favourites: ReqMedia["favourites"] }>> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): MediaQuery<Add<T, { tags: ReqMedia["tags"] }>> {
        this.query.set("tags", args.length ? args : ["id"])
        return <never>this;
    }

    withRelations(options: {
        edges?: Array<keyof MediaEdge>,
        nodes?: Array<keyof Media>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<Add<T, { relations: ReqMedia["relations"] }>> {
        const { edges, nodes, pageInfo } = options as InternalConnection;

        this.query.set("relations", { edges, nodes, pageInfo })
        return <never>this;
    }

    withCharacters(options: {
        args?: {
            sort?: Array<CharacterSort>,
            role?: CharacterRole,
            page?: number,
            perPage?: number
        },
        edges?: Array<keyof CharacterEdge>,
        nodes?: Array<keyof Character>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<Add<T, { characters: ReqMedia["characters"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("characters", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withStaff(options: {
        args?: {
            sort: Array<StaffSort>,
            page: number,
            perPage: number
        },
        edges?: Array<keyof StaffEdge>,
        nodes?: Array<keyof Staff>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<Add<T, { staff: ReqMedia["staff"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("staff", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withStudios(options: {
        args?: {
            sort?: Array<StudioSort>,
            isMain?: boolean
        }
        edges?: Array<keyof StudioEdge>,
        nodes?: Array<keyof Studio>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<Add<T, { studios: ReqMedia["studios"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("studios", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    isFavourite(): MediaQuery<Add<T, { isFavourite: ReqMedia["isFavourite"] }>> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    isFavouriteBlocked(): MediaQuery<Add<T, { isFavouriteBlocked: ReqMedia["isFavouriteBlocked"] }>> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    isAdult(): MediaQuery<Add<T, { isAdult: ReqMedia["isAdult"] }>> {
        this.query.set("isAdult", void 0);
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): MediaQuery<Add<T, { nextAiringEpisode: ReqMedia["nextAiringEpisode"] }>> {
        this.query.set("nextAiringEpisode", args.length ? args : ["id"])
        return <never>this;
    }

    withAiringSchedule(options: {
        args?: {
            notYetAired?: boolean,
            page?: number,
            perPage?: number
        }
        edges?: Array<keyof AiringScheduleEdge>,
        nodes?: Array<keyof AiringSchedule>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<Add<T, { airingSchedule: ReqMedia["airingSchedule"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("airingSchedule", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withTrends(options: {
        args?: {
            sort?: Array<MediaTrendSort>,
            releasing?: boolean,
            page?: number,
            perPage?: number
        }
        edges?: Array<keyof MediaTrendEdge>,
        nodes?: Array<keyof MediaTrend>,
        pageInfo?: Array<keyof PageInfo>
    } = {
            edges: [<never>`node {
        averageScore
        popularity
        inProgress
        episode`]
        }): MediaQuery<Add<T, { trends: ReqMedia["trends"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("trends", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>): MediaQuery<Add<T, { externalLinks: ReqMedia["externalLinks"] }>> {
        this.query.set("externalLinks", args.length ? args : ["id"])
        return <never>this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): MediaQuery<Add<T, { streamingEpisodes: ReqMedia["streamingEpisodes"] }>> {
        this.query.set("streamingEpisodes", args.length ? args : ["title, thumbnail", "url", "site"])
        return <never>this;
    }

    withRankings(...args: Array<keyof MediaRank>): MediaQuery<Add<T, { rankings: ReqMedia["rankings"] }>> {
        this.query.set("rankings", args.length ? args : ["id"]);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): MediaQuery<Add<T, { mediaListEntry: ReqMedia["mediaListEntry"] }>> {
        this.query.set("mediaListEntry", args.length ? args : ["id"])
        return <never>this;
    }

    withReviews(options: {
        edges?: Array<keyof ReviewEdge>,
        nodes?: Array<keyof Review>,
        pageInfo?: Array<keyof PageInfo>
    } = {
            edges: [<never>`node {
        id
    }`]
        }): MediaQuery<Add<T, { reviews: ReqMedia["reviews"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("reviews", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withRecommendations(options: {
        args?: {
            sort?: Array<RecommendationSort>,
            page?: number,
            perPage?: number
        },
        edges?: Array<keyof RecommendationEdge>,
        nodes?: Array<keyof Recommendation>,
        pageInfo?: Array<keyof PageInfo>
    } = {
            edges: [<never>`node {
        id
    }`]
        }): MediaQuery<Add<T, { recommendations: ReqMedia["recommendations"] }>> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("recommendations", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withStats(options: {
        scoreDistribution?: Array<keyof ScoreDistribution>;
        statusDistribution?: Array<keyof StatusDistribution>;
    } = <never>{}): MediaQuery<Add<T, { stats: ReqMedia["stats"] }>> {
        const { scoreDistribution, statusDistribution } = options;

        this.query.set("stats", Object.keys(options).length ? [`stats {
            ${scoreDistribution?.length ? `scoreDistribution {
                ${scoreDistribution.join(",\n")}
            },` : ""}
            ${statusDistribution?.length ? `statusDistribution {
                ${statusDistribution.join(",\n")}
            },` : ""}
        }`] : [`scoreDistribution {
            score,
            amount
        },`, `statusDistribution {
            status,
            amount
        }`])
        return <never>this;
    }

    withSiteUrl(): MediaQuery<Add<T, { siteUrl: ReqMedia["siteUrl"] }>> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    withAutoCreateForumThread(): MediaQuery<Add<T, { autoCreateForumThread: ReqMedia["autoCreateForumThread"] }>> {
        this.query.set("autoCreateForumThread", void 0);
        return <never>this;
    }

    isRecommendationBlocked(): MediaQuery<Add<T, { isRecommendationBlocked: ReqMedia["isRecommendationBlocked"] }>> {
        this.query.set("isRecommendationBlocked", void 0);
        return <never>this;
    }

    isReviewBlocked(): MediaQuery<Add<T, { isReviewBlocked: ReqMedia["isReviewBlocked"] }>> {
        this.query.set("isReviewBlocked", void 0);
        return <never>this;
    }

    withModNotes(): MediaQuery<Add<T, { modNotes: ReqMedia["modNotes"] }>> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}