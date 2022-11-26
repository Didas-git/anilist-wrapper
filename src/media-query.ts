import { inspect } from "node:util";
import type {
    AiringSchedule,
    AiringScheduleEdge,
    Character,
    CharacterEdge,
    FetchReturnType,
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
    Add
} from "./typings";

type ReqMedia = Required<Media>

export class QueryMedia<T = { empty: never }> {
    #url = "https://graphql.anilist.co";
    #options: MediaArguments = {
        type: "ANIME"
    };

    #query: Array<keyof Media> = [];
    /**
     * @param media - Not Implemented yet
     */
    constructor(name: string, media?: MediaArguments)
    /**
     * @param media - Not Implemented yet
     */
    constructor(args: MediaArguments, media?: MediaArguments)
    /**
     * @param _media - Not Implemented yet
     */
    constructor(params: MediaArguments | string, _media?: MediaArguments) {
        if (typeof params === "string") this.#options = { ...this.#options, search: params };
        else this.#options = { ...this.#options, ...params };
    }

    #transformOptions() {
        return Object.keys(this.#options).map((key) => `${key}: ${this.#options[<keyof MediaArguments>key]!.toString().split(" ").length - 1 >= 1 ? JSON.stringify(this.#options[<keyof MediaArguments>key]) : this.#options[<keyof MediaArguments>key]}`).join(", ")
    }

    #buildQuery() {
        return `query {
    Media(${this.#transformOptions()}) {
        ${this.#query.join(",\n        ") || "id"}
    }
}
    `};

    async fetch<R extends boolean = false>(raw?: R): Promise<R extends true ? FetchReturnType<T extends Media ? T : { id: number }> : T extends Media ? T : { id: number }> {
        const res = await fetch(this.#url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: this.#buildQuery()
            })
        })
        if (!res.ok) throw new Error(inspect(await res.json(), false, null, true));

        const json: FetchReturnType<T> = await res.json();

        return raw ? <never>json : <never>json.data.Media;
    }

    withId(): QueryMedia<Add<T, { id: ReqMedia["id"] }>> {
        this.#query.push("id");
        return <never>this;
    }

    withMalId(): QueryMedia<Add<T, { idMal: ReqMedia["idMal"] }>> {
        this.#query.push("idMal");
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): QueryMedia<Add<T, { title: ReqMedia["title"] }>> {
        const titleQuery: Media["title"] = <never>(args.length ? `title {
            ${args.join(",\n            ")}
        }` : `title {
            romaji
        }`)

        this.#query.push(titleQuery);
        return <never>this;
    }

    withType(): QueryMedia<Add<T, { type: ReqMedia["type"] }>> {
        this.#query.push("type");
        return <never>this;
    }

    withFormat(): QueryMedia<Add<T, { format: ReqMedia["format"] }>> {
        this.#query.push("format");
        return <never>this;
    }

    withStatus(): QueryMedia<Add<T, { status: ReqMedia["status"] }>> {
        this.#query.push("status");
        return <never>this;
    }

    withDescription(): QueryMedia<Add<T, { description: ReqMedia["description"] }>> {
        this.#query.push("description");
        return <never>this;
    }

    withStartDate(): QueryMedia<Add<T, { startDate: ReqMedia["startDate"] }>> {
        this.#query.push("startDate");
        return <never>this;
    }

    withEndDate(): QueryMedia<Add<T, { endDate: ReqMedia["endDate"] }>> {
        this.#query.push("endDate");
        return <never>this;
    }

    withSeason(): QueryMedia<Add<T, { season: ReqMedia["season"] }>> {
        this.#query.push("season");
        return <never>this;
    }

    withSeasonYear(): QueryMedia<Add<T, { seasonYear: ReqMedia["seasonYear"] }>> {
        this.#query.push("seasonYear");
        return <never>this;
    }

    withSeasonInt(): QueryMedia<Add<T, { seasonInt: ReqMedia["seasonInt"] }>> {
        this.#query.push("seasonInt");
        return <never>this;
    }

    withEpisodes(): QueryMedia<Add<T, { episodes: ReqMedia["episodes"] }>> {
        this.#query.push("episodes");
        return <never>this;
    }

    withDuration(): QueryMedia<Add<T, { duration: ReqMedia["duration"] }>> {
        this.#query.push("duration");
        return <never>this;
    }

    withChapters(): QueryMedia<Add<T, { chapters: ReqMedia["chapters"] }>> {
        this.#query.push("chapters");
        return <never>this;
    }

    withVolumes(): QueryMedia<Add<T, { volumes: ReqMedia["volumes"] }>> {
        this.#query.push("volumes");
        return <never>this;
    }

    withCountryOfOrigin(): QueryMedia<Add<T, { countryOfOrigin: ReqMedia["countryOfOrigin"] }>> {
        this.#query.push("countryOfOrigin");
        return <never>this;
    }

    isLicensed(): QueryMedia<Add<T, { isLicensed: ReqMedia["isLicensed"] }>> {
        this.#query.push("isLicensed");
        return <never>this;
    }

    withSource(): QueryMedia<Add<T, { source: ReqMedia["source"] }>> {
        this.#query.push("source");
        return <never>this;
    }

    withTwitterHashtag(): QueryMedia<Add<T, { hashtag: ReqMedia["hashtag"] }>> {
        this.#query.push("hashtag");
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): QueryMedia<Add<T, { trailer: ReqMedia["trailer"] }>> {
        const trailerQuery: Media["trailer"] = <never>(args.length ? `trailer {
            ${args.join(",\n            ")}
        }` : `trailer {
            id
        }`)

        this.#query.push(trailerQuery);
        return <never>this;
    }

    updatedAt(): QueryMedia<Add<T, { updatedAt: ReqMedia["updatedAt"] }>> {
        this.#query.push("updatedAt");
        return <never>this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>): QueryMedia<Add<T, { coverImage: ReqMedia["coverImage"] }>> {
        const coverImageQuery = <never>(args.length ? `coverImage {
            ${args.join(",\n            ")}
        }` : `coverImage {
            extraLarge,
            large,
            medium,
            color
        }`)

        this.#query.push(coverImageQuery);
        return <never>this;
    }

    withBannerImage(): QueryMedia<Add<T, { bannerImage: ReqMedia["bannerImage"] }>> {
        this.#query.push("bannerImage");
        return <never>this;
    }

    withGenres(): QueryMedia<Add<T, { genres: ReqMedia["genres"] }>> {
        this.#query.push("genres");
        return <never>this;
    }

    withSynonyms(): QueryMedia<Add<T, { synonyms: ReqMedia["synonyms"] }>> {
        this.#query.push("synonyms");
        return <never>this;
    }

    withAverageScore(): QueryMedia<Add<T, { averageScore: ReqMedia["averageScore"] }>> {
        this.#query.push("averageScore");
        return <never>this;
    }

    withMeanScore(): QueryMedia<Add<T, { meanScore: ReqMedia["meanScore"] }>> {
        this.#query.push("meanScore");
        return <never>this;
    }

    withPopularity(): QueryMedia<Add<T, { popularity: ReqMedia["popularity"] }>> {
        this.#query.push("popularity");
        return <never>this;
    }

    isLocked(): QueryMedia<Add<T, { isLocked: ReqMedia["isLocked"] }>> {
        this.#query.push("isLocked");
        return <never>this;
    }

    withTrending(): QueryMedia<Add<T, { trending: ReqMedia["trending"] }>> {
        this.#query.push("trending");
        return <never>this;
    }

    withFavourites(): QueryMedia<Add<T, { favourites: ReqMedia["favourites"] }>> {
        this.#query.push("favourites");
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): QueryMedia<Add<T, { tags: ReqMedia["tags"] }>> {
        const tagsQuery = <never>(args.length ? `tags {
            ${args.join(",\n            ")}
        }` : `tags {
            id
        }`)
        this.#query.push(tagsQuery);
        return <never>this;
    }

    withRelations(options: {
        edges?: Array<keyof MediaEdge>,
        nodes?: Array<keyof Media>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { relations: ReqMedia["relations"] }>> {
        const { edges, nodes, pageInfo } = options;
        const relationsQuery = <never>(Object.keys(options).length ? `relations {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `relations {
            edges {
                id
            }
        }`)

        this.#query.push(relationsQuery);
        return <never>this;
    }

    withCharacters(options: {
        edges?: Array<keyof CharacterEdge>,
        nodes?: Array<keyof Character>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { characters: ReqMedia["characters"] }>> {
        const { edges, nodes, pageInfo } = options;
        const charactersQuery = <never>(Object.keys(options).length ? `characters {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `characters {
            edges {
                id
            }
        }`)

        this.#query.push(charactersQuery);
        return <never>this;
    }

    withStaff(options: {
        edges?: Array<keyof StaffEdge>,
        nodes?: Array<keyof Staff>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { staff: ReqMedia["staff"] }>> {
        const { edges, nodes, pageInfo } = options;
        const staffQuery = <never>(Object.keys(options).length ? `staff {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `staff {
            edges {
                id
            }
        }`)

        this.#query.push(staffQuery);
        return <never>this;
    }

    withStudios(options: {
        edges?: Array<keyof StudioEdge>,
        nodes?: Array<keyof Studio>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { studios: ReqMedia["studios"] }>> {
        const { edges, nodes, pageInfo } = options;
        const studiosQuery = <never>(Object.keys(options).length ? `studios {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `studios {
            edges {
                id
            }
        }`)

        this.#query.push(studiosQuery);
        return <never>this;
    }

    isFavourite(): QueryMedia<Add<T, { isFavourite: ReqMedia["isFavourite"] }>> {
        this.#query.push("isFavourite");
        return <never>this;
    }

    isFavouriteBlocked(): QueryMedia<Add<T, { isFavouriteBlocked: ReqMedia["isFavouriteBlocked"] }>> {
        this.#query.push("isFavouriteBlocked");
        return <never>this;
    }

    isAdult(): QueryMedia<Add<T, { isAdult: ReqMedia["isAdult"] }>> {
        this.#query.push("isAdult");
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): QueryMedia<Add<T, { nextAiringEpisode: ReqMedia["nextAiringEpisode"] }>> {
        const nextAiringEpisodeQuery = <never>(args.length ? `nextAiringEpisode {
            ${args.join(",\n            ")}
        }` : `nextAiringEpisode {
            id
        }`)
        this.#query.push(nextAiringEpisodeQuery);
        return <never>this;
    }

    withAiringSchedule(options: {
        edges?: Array<keyof AiringScheduleEdge>,
        nodes?: Array<keyof AiringSchedule>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { airingSchedule: ReqMedia["airingSchedule"] }>> {
        const { edges, nodes, pageInfo } = options;
        const airingScheduleQuery = <never>(Object.keys(options).length ? `airingSchedule {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `airingSchedule {
            edges {
                id
            }
        }`)

        this.#query.push(airingScheduleQuery);
        return <never>this;
    }

    withTrends(options: {
        edges?: Array<keyof MediaTrendEdge>,
        nodes?: Array<keyof MediaTrend>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { trends: ReqMedia["trends"] }>> {
        const { edges, nodes, pageInfo } = options;
        const trendsQuery = <never>(Object.keys(options).length ? `trends {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `trends {
            edges {
                id
            }
        }`)

        this.#query.push(trendsQuery);
        return <never>this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>): QueryMedia<Add<T, { externalLinks: ReqMedia["externalLinks"] }>> {
        const externalLinksQuery = <never>(args.length ? `externalLinks {
            ${args.join(",\n            ")}
        }` : `externalLinks {
            id
        }`)

        this.#query.push(externalLinksQuery);
        return <never>this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): QueryMedia<Add<T, { streamingEpisodes: ReqMedia["streamingEpisodes"] }>> {
        const streamingEpisodesQuery = <never>(args.length ? `streamingEpisodes {
            ${args.join(",\n            ")}
        }` : `streamingEpisodes {
            title,
            thumbnail,
            url,
            site
        }`)

        this.#query.push(streamingEpisodesQuery);
        return <never>this;
    }

    withRankings(...args: Array<keyof MediaRank>): QueryMedia<Add<T, { rankings: ReqMedia["rankings"] }>> {
        const rankingsQuery = <never>(args.length ? `rankings {
            ${args.join(",\n            ")}
        }` : `rankings {
            id
        }`)
        this.#query.push(rankingsQuery);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): QueryMedia<Add<T, { mediaListEntry: ReqMedia["mediaListEntry"] }>> {
        const mediaListEntryQuery = <never>(args.length ? `mediaListEntry {
            ${args.join(",\n            ")}
        }` : `mediaListEntry {
            id
        }`)

        this.#query.push(mediaListEntryQuery);
        return <never>this;
    }

    withReviews(options: {
        edges?: Array<keyof ReviewEdge>,
        nodes?: Array<keyof Review>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { reviews: ReqMedia["reviews"] }>> {
        const { edges, nodes, pageInfo } = options;
        const reviewsQuery = <never>(Object.keys(options).length ? `reviews {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `reviews {
            edges {
                id
            }
        }`)

        this.#query.push(reviewsQuery);
        return <never>this;
    }

    withRecommendations(options: {
        edges?: Array<keyof RecommendationEdge>,
        nodes?: Array<keyof Recommendation>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): QueryMedia<Add<T, { recommendations: ReqMedia["recommendations"] }>> {
        const { edges, nodes, pageInfo } = options;
        const recommendationsQuery = <never>(Object.keys(options).length ? `recommendations {
            ${edges?.length ? `edges {
                ${edges.join(",\n                ")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n                ")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n                ")}
            }`: ""}
        }` : `recommendations {
            edges {
                id
            }
        }`)

        this.#query.push(recommendationsQuery);
        return <never>this;
    }

    withStats(options: {
        scoreDistribution?: Array<keyof ScoreDistribution>;
        statusDistribution?: Array<keyof StatusDistribution>;
    } = <never>{}): QueryMedia<Add<T, { stats: ReqMedia["stats"] }>> {
        const { scoreDistribution, statusDistribution } = options;
        const trailerQuery = <never>(Object.keys(options).length ? `stats {
            ${scoreDistribution?.length ? `scoreDistribution {
                ${scoreDistribution.join(",\n                ")}
            },` : ""}
            ${statusDistribution?.length ? `statusDistribution {
                ${statusDistribution.join(",\n                ")}
            },` : ""}
        }` : `stats {
            scoreDistribution {
                score,
                amount
            },
            statusDistribution {
                status,
                amount
            }
        }`)
        this.#query.push(trailerQuery);
        return <never>this;
    }

    withSiteUrl(): QueryMedia<Add<T, { siteUrl: ReqMedia["siteUrl"] }>> {
        this.#query.push("siteUrl");
        return <never>this;
    }

    withAutoCreateForumThread(): QueryMedia<Add<T, { autoCreateForumThread: ReqMedia["autoCreateForumThread"] }>> {
        this.#query.push("autoCreateForumThread");
        return <never>this;
    }

    isRecommendationBlocked(): QueryMedia<Add<T, { isRecommendationBlocked: ReqMedia["isRecommendationBlocked"] }>> {
        this.#query.push("isRecommendationBlocked");
        return <never>this;
    }

    isReviewBlocked(): QueryMedia<Add<T, { isReviewBlocked: ReqMedia["isReviewBlocked"] }>> {
        this.#query.push("isReviewBlocked");
        return <never>this;
    }

    withModNotes(): QueryMedia<Add<T, { modNotes: ReqMedia["modNotes"] }>> {
        this.#query.push("modNotes");
        return <never>this;
    }

    get raw(): string {
        return this.#buildQuery();
    }
}