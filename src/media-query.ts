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
    StatusDistribution
} from "./typings";

export class QueryMedia {
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

    async fetch<T extends boolean = false>(raw?: T): Promise<T extends true ? FetchReturnType : Media> {
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

        const json: FetchReturnType = await res.json();

        return raw ? <never>json : <never>json.data.Media;
    }

    withId() {
        this.#query.push("id");
        return this;
    }

    withMalId() {
        this.#query.push("idMal");
        return this;
    }

    withTitles(...args: Array<keyof MediaTitle>) {
        const titleQuery: Media["title"] = <never>(args.length ? `title {
            ${args.join(",\n            ")}
        }` : `title {
            romaji
        }`)

        this.#query.push(titleQuery);
        return this;
    }

    withType() {
        this.#query.push("type");
        return this;
    }

    withFormat() {
        this.#query.push("format");
        return this;
    }

    withStatus() {
        this.#query.push("status");
        return this;
    }

    withDescription() {
        this.#query.push("description");
        return this;
    }

    withStartDate() {
        this.#query.push("startDate");
        return this;
    }

    withEndDate() {
        this.#query.push("endDate");
        return this;
    }

    withSeason() {
        this.#query.push("season");
        return this;
    }

    withSeasonYear() {
        this.#query.push("seasonYear");
        return this;
    }

    withSeasonInt() {
        this.#query.push("seasonInt");
        return this;
    }

    withEpisodes() {
        this.#query.push("episodes");
        return this;
    }

    withDuration() {
        this.#query.push("duration");
        return this;
    }

    withChapters() {
        this.#query.push("chapters");
        return this;
    }

    withVolumes() {
        this.#query.push("volumes");
        return this;
    }

    withCountryOfOrigin() {
        this.#query.push("countryOfOrigin");
        return this;
    }

    isLicensed() {
        this.#query.push("isLicensed");
        return this;
    }

    withSource() {
        this.#query.push("source");
        return this;
    }

    withTwitterHashtag() {
        this.#query.push("hashtag");
        return this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>) {
        const trailerQuery: Media["trailer"] = <never>(args.length ? `trailer {
            ${args.join(",\n            ")}
        }` : `trailer {
            id
        }`)

        this.#query.push(trailerQuery);
        return this;
    }

    updatedAt() {
        this.#query.push("updatedAt");
        return this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>) {
        const coverImageQuery = <never>(args.length ? `coverImage {
            ${args.join(",\n            ")}
        }` : `coverImage {
            extraLarge,
            large,
            medium,
            color
        }`)

        this.#query.push(coverImageQuery);
        return this;
    }

    withBannerImage() {
        this.#query.push("bannerImage");
        return this;
    }

    withGenres() {
        this.#query.push("genres");
        return this;
    }

    withSynonyms() {
        this.#query.push("synonyms");
        return this;
    }

    withAverageScore() {
        this.#query.push("averageScore");
        return this;
    }

    withMeanScore() {
        this.#query.push("meanScore");
        return this;
    }

    withPopularity() {
        this.#query.push("popularity");
        return this;
    }

    isLocked() {
        this.#query.push("isLocked");
        return this;
    }

    withTrending() {
        this.#query.push("trending");
        return this;
    }

    withFavourites() {
        this.#query.push("favourites");
        return this;
    }

    withTags(...args: Array<keyof MediaTag>) {
        const tagsQuery = <never>(args.length ? `tags {
            ${args.join(",\n            ")}
        }` : `tags {
            id
        }`)
        this.#query.push(tagsQuery);
        return this;
    }

    withRelations(options: {
        edges?: Array<keyof MediaEdge>,
        nodes?: Array<keyof Media>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withCharacters(options: {
        edges?: Array<keyof CharacterEdge>,
        nodes?: Array<keyof Character>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withStaff(options: {
        edges?: Array<keyof StaffEdge>,
        nodes?: Array<keyof Staff>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withStudios(options: {
        edges?: Array<keyof StudioEdge>,
        nodes?: Array<keyof Studio>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    isFavourite() {
        this.#query.push("isFavourite");
        return this;
    }

    isFavouriteBlocked() {
        this.#query.push("isFavouriteBlocked");
        return this;
    }

    isAdult() {
        this.#query.push("isAdult");
        return this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>) {
        const nextAiringEpisodeQuery = <never>(args.length ? `nextAiringEpisode {
            ${args.join(",\n            ")}
        }` : `nextAiringEpisode {
            id
        }`)
        this.#query.push(nextAiringEpisodeQuery);
        return this;
    }

    withAiringSchedule(options: {
        edges?: Array<keyof AiringScheduleEdge>,
        nodes?: Array<keyof AiringSchedule>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withTrends(options: {
        edges?: Array<keyof MediaTrendEdge>,
        nodes?: Array<keyof MediaTrend>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>) {
        const externalLinksQuery = <never>(args.length ? `externalLinks {
            ${args.join(",\n            ")}
        }` : `externalLinks {
            id
        }`)

        this.#query.push(externalLinksQuery);
        return this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>) {
        const streamingEpisodesQuery = <never>(args.length ? `streamingEpisodes {
            ${args.join(",\n            ")}
        }` : `streamingEpisodes {
            title,
            thumbnail,
            url,
            site
        }`)

        this.#query.push(streamingEpisodesQuery);
        return this;
    }

    withRankings(...args: Array<keyof MediaRank>) {
        const rankingsQuery = <never>(args.length ? `rankings {
            ${args.join(",\n            ")}
        }` : `rankings {
            id
        }`)
        this.#query.push(rankingsQuery);
        return this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>) {
        const mediaListEntryQuery = <never>(args.length ? `mediaListEntry {
            ${args.join(",\n            ")}
        }` : `mediaListEntry {
            id
        }`)

        this.#query.push(mediaListEntryQuery);
        return this;
    }

    withReviews(options: {
        edges?: Array<keyof ReviewEdge>,
        nodes?: Array<keyof Review>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withRecommendations(options: {
        edges?: Array<keyof RecommendationEdge>,
        nodes?: Array<keyof Recommendation>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}) {
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
        return this;
    }

    withStats(options: {
        scoreDistribution?: Array<keyof ScoreDistribution>;
        statusDistribution?: Array<keyof StatusDistribution>;
    } = <never>{}) {
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
        return this;
    }

    withSiteUrl() {
        this.#query.push("siteUrl");
        return this;
    }

    withAutoCreateForumThread() {
        this.#query.push("autoCreateForumThread");
        return this;
    }

    isRecommendationBlocked() {
        this.#query.push("isRecommendationBlocked");
        return this;
    }

    isReviewBlocked() {
        this.#query.push("isReviewBlocked");
        return this;
    }

    withModNotes() {
        this.#query.push("modNotes");
        return this;
    }

    get raw(): string {
        return this.#buildQuery();
    }
}