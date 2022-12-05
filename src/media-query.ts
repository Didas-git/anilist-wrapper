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
    AddMedia,
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

export interface MediaQuery<T> {
    fetch(raw?: false): Promise<T extends Media ? { [K in keyof T]: T[K] } : { id: number }>
    fetch(raw?: true): Promise<T extends Media ? { data: { Media: { [K in keyof T]: T[K] } } } : { data: { Media: { id: number } } }>
}

export class MediaQuery<T = {}> extends Query<Media> {
    protected options: MediaArguments = {
        type: "ANIME"
    };

    protected default: string = "id";
    protected type: string = "Media";
    constructor(name?: string)
    constructor(args?: MediaArguments)
    constructor(params?: MediaArguments | string) {
        super();

        if (typeof params === "string") this.options.search = params;
        else if (params) this.options = params;
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

    withId(): MediaQuery<AddMedia<T, "id">> {
        this.query.set("id", void 0);
        return <never>this;
    }

    withMalId(): MediaQuery<AddMedia<T, "idMal">> {
        this.query.set("idMal", void 0);
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): MediaQuery<AddMedia<T, "title">> {
        this.query.set("title", args.length ? args : ["romaji"])
        return <never>this;
    }

    withType(): MediaQuery<AddMedia<T, "type">> {
        this.query.set("type", void 0);
        return <never>this;
    }

    withFormat(): MediaQuery<AddMedia<T, "format">> {
        this.query.set("format", void 0);
        return <never>this;
    }

    withStatus(version?: number): MediaQuery<AddMedia<T, "status">> {
        this.query.set("status", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    withDescription(asHtml?: boolean): MediaQuery<AddMedia<T, "description">> {
        this.query.set("description", { args: asHtml ? { asHtml } : void 0, fields: void 0 });
        return <never>this;
    }

    withStartDate(...args: Array<keyof FuzzyDate>): MediaQuery<AddMedia<T, "startDate">> {
        this.query.set("startDate", args.length ? args : ["year", "month", "day"])
        return <never>this;
    }

    withEndDate(...args: Array<keyof FuzzyDate>): MediaQuery<AddMedia<T, "endDate">> {
        this.query.set("endDate", args.length ? args : ["year", "month", "day"])
        return <never>this;
    }

    withSeason(): MediaQuery<AddMedia<T, "season">> {
        this.query.set("season", void 0);
        return <never>this;
    }

    withSeasonYear(): MediaQuery<AddMedia<T, "seasonYear">> {
        this.query.set("seasonYear", void 0);
        return <never>this;
    }

    withSeasonInt(): MediaQuery<AddMedia<T, "seasonInt">> {
        this.query.set("seasonInt", void 0);
        return <never>this;
    }

    withEpisodes(): MediaQuery<AddMedia<T, "episodes">> {
        this.query.set("episodes", void 0);
        return <never>this;
    }

    withDuration(): MediaQuery<AddMedia<T, "duration">> {
        this.query.set("duration", void 0);
        return <never>this;
    }

    withChapters(): MediaQuery<AddMedia<T, "chapters">> {
        this.query.set("chapters", void 0);
        return <never>this;
    }

    withVolumes(): MediaQuery<AddMedia<T, "volumes">> {
        this.query.set("volumes", void 0);
        return <never>this;
    }

    withCountryOfOrigin(): MediaQuery<AddMedia<T, "countryOfOrigin">> {
        this.query.set("countryOfOrigin", void 0);
        return <never>this;
    }

    isLicensed(): MediaQuery<AddMedia<T, "isLicensed">> {
        this.query.set("isLicensed", void 0);
        return <never>this;
    }

    withSource(version?: number): MediaQuery<AddMedia<T, "source">> {
        this.query.set("source", { args: version ? { version } : void 0, fields: void 0 });
        return <never>this;
    }

    withTwitterHashtag(): MediaQuery<AddMedia<T, "hashtag">> {
        this.query.set("hashtag", void 0);
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): MediaQuery<AddMedia<T, "trailer">> {
        this.query.set("trailer", args.length ? args : ["id"])
        return <never>this;
    }

    updatedAt(): MediaQuery<AddMedia<T, "updatedAt">> {
        this.query.set("updatedAt", void 0);
        return <never>this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>): MediaQuery<AddMedia<T, "coverImage">> {
        this.query.set("coverImage", args.length ? args : ["extraLarge", "large", "medium", "color"])
        return <never>this;
    }

    withBannerImage(): MediaQuery<AddMedia<T, "bannerImage">> {
        this.query.set("bannerImage", void 0);
        return <never>this;
    }

    withGenres(): MediaQuery<AddMedia<T, "genres">> {
        this.query.set("genres", void 0);
        return <never>this;
    }

    withSynonyms(): MediaQuery<AddMedia<T, "synonyms">> {
        this.query.set("synonyms", void 0);
        return <never>this;
    }

    withAverageScore(): MediaQuery<AddMedia<T, "averageScore">> {
        this.query.set("averageScore", void 0);
        return <never>this;
    }

    withMeanScore(): MediaQuery<AddMedia<T, "meanScore">> {
        this.query.set("meanScore", void 0);
        return <never>this;
    }

    withPopularity(): MediaQuery<AddMedia<T, "popularity">> {
        this.query.set("popularity", void 0);
        return <never>this;
    }

    isLocked(): MediaQuery<AddMedia<T, "isLocked">> {
        this.query.set("isLocked", void 0);
        return <never>this;
    }

    withTrending(): MediaQuery<AddMedia<T, "trending">> {
        this.query.set("trending", void 0);
        return <never>this;
    }

    withFavourites(): MediaQuery<AddMedia<T, "favourites">> {
        this.query.set("favourites", void 0);
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): MediaQuery<AddMedia<T, "tags">> {
        this.query.set("tags", args.length ? args : ["id"])
        return <never>this;
    }

    withRelations(options: {
        edges?: Array<keyof MediaEdge>,
        nodes?: Array<keyof Media>,
        pageInfo?: Array<keyof PageInfo>
    } = { edges: ["id"] }): MediaQuery<AddMedia<T, "relations">> {
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
    } = { edges: ["id"] }): MediaQuery<AddMedia<T, "characters">> {
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
    } = { edges: ["id"] }): MediaQuery<AddMedia<T, "staff">> {
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
    } = { edges: ["id"] }): MediaQuery<AddMedia<T, "studios">> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("studios", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    isFavourite(): MediaQuery<AddMedia<T, "isFavourite">> {
        this.query.set("isFavourite", void 0);
        return <never>this;
    }

    isFavouriteBlocked(): MediaQuery<AddMedia<T, "isFavouriteBlocked">> {
        this.query.set("isFavouriteBlocked", void 0);
        return <never>this;
    }

    isAdult(): MediaQuery<AddMedia<T, "isAdult">> {
        this.query.set("isAdult", void 0);
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): MediaQuery<AddMedia<T, "nextAiringEpisode">> {
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
    } = { edges: ["id"] }): MediaQuery<AddMedia<T, "airingSchedule">> {
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
        }): MediaQuery<AddMedia<T, "trends">> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("trends", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>): MediaQuery<AddMedia<T, "externalLinks">> {
        this.query.set("externalLinks", args.length ? args : ["id"])
        return <never>this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): MediaQuery<AddMedia<T, "streamingEpisodes">> {
        this.query.set("streamingEpisodes", args.length ? args : ["title, thumbnail", "url", "site"])
        return <never>this;
    }

    withRankings(...args: Array<keyof MediaRank>): MediaQuery<AddMedia<T, "rankings">> {
        this.query.set("rankings", args.length ? args : ["id"]);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): MediaQuery<AddMedia<T, "mediaListEntry">> {
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
        }): MediaQuery<AddMedia<T, "reviews">> {
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
        }): MediaQuery<AddMedia<T, "recommendations">> {
        const { edges, nodes, pageInfo, args } = options as InternalConnection & Complex;

        this.query.set("recommendations", { edges, nodes, pageInfo, args })
        return <never>this;
    }

    withStats(options: {
        scoreDistribution?: Array<keyof ScoreDistribution>;
        statusDistribution?: Array<keyof StatusDistribution>;
    } = <never>{}): MediaQuery<AddMedia<T, "stats">> {
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

    withSiteUrl(): MediaQuery<AddMedia<T, "siteUrl">> {
        this.query.set("siteUrl", void 0);
        return <never>this;
    }

    withAutoCreateForumThread(): MediaQuery<AddMedia<T, "autoCreateForumThread">> {
        this.query.set("autoCreateForumThread", void 0);
        return <never>this;
    }

    isRecommendationBlocked(): MediaQuery<AddMedia<T, "isRecommendationBlocked">> {
        this.query.set("isRecommendationBlocked", void 0);
        return <never>this;
    }

    isReviewBlocked(): MediaQuery<AddMedia<T, "isReviewBlocked">> {
        this.query.set("isReviewBlocked", void 0);
        return <never>this;
    }

    withModNotes(): MediaQuery<AddMedia<T, "modNotes">> {
        this.query.set("modNotes", void 0);
        return <never>this;
    }
}