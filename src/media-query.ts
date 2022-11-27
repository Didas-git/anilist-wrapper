import { inspect } from "node:util";
import { Query } from "./base-query";
import {
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
    Add,
    MediaArgs
} from "./typings";

type ReqMedia = Required<Media>

export class QueryMedia<T = { empty: never }> extends Query {
    protected options: MediaArguments = {
        type: "ANIME"
    };

    protected query = new Set<keyof Media>();
    protected default: string = "id";
    constructor(name: string, media?: Array<MediaArgs>)
    constructor(args: MediaArguments, media?: Array<MediaArgs>)
    constructor(params: MediaArguments | string, media?: Array<MediaArgs>) {
        super();

        if (typeof params === "string") this.options = { ...this.options, search: params };
        else this.options = { ...this.options, ...params };

        this.createQueryOptions(media);
    }

    protected buildQuery() {
        const { options, returns } = this.preBuild()
        return `query {
    Media(${options}) {
        ${returns}
    }
}
    `};

    async fetch<R extends boolean = false>(raw?: R): Promise<R extends true ? FetchReturnType<T extends Media ? T : { id: number }> : T extends Media ? T : { id: number }> {
        const res = await fetch(Query.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: this.buildQuery()
            })
        })
        if (!res.ok) throw new Error(inspect(await res.json(), false, null, true));

        const json: FetchReturnType<T> = await res.json();

        return raw ? <never>json : <never>json.data.Media;
    }

    variables(options: MediaArguments, override: boolean = false) {
        this.options = override ? options : { ...this.options, ...options }
        return this;
    }

    withId(): QueryMedia<Add<T, { id: ReqMedia["id"] }>> {
        this.query.add("id");
        return <never>this;
    }

    withMalId(): QueryMedia<Add<T, { idMal: ReqMedia["idMal"] }>> {
        this.query.add("idMal");
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): QueryMedia<Add<T, { title: ReqMedia["title"] }>> {
        const titleQuery: Media["title"] = <never>(args.length ? `title {
            ${args.join(",\n            ")}
        }` : `title {
            romaji
        }`)

        this.query.add(titleQuery);
        return <never>this;
    }

    withType(): QueryMedia<Add<T, { type: ReqMedia["type"] }>> {
        this.query.add("type");
        return <never>this;
    }

    withFormat(): QueryMedia<Add<T, { format: ReqMedia["format"] }>> {
        this.query.add("format");
        return <never>this;
    }

    withStatus(): QueryMedia<Add<T, { status: ReqMedia["status"] }>> {
        this.query.add("status");
        return <never>this;
    }

    withDescription(): QueryMedia<Add<T, { description: ReqMedia["description"] }>> {
        this.query.add("description");
        return <never>this;
    }

    withStartDate(): QueryMedia<Add<T, { startDate: ReqMedia["startDate"] }>> {
        this.query.add("startDate");
        return <never>this;
    }

    withEndDate(): QueryMedia<Add<T, { endDate: ReqMedia["endDate"] }>> {
        this.query.add("endDate");
        return <never>this;
    }

    withSeason(): QueryMedia<Add<T, { season: ReqMedia["season"] }>> {
        this.query.add("season");
        return <never>this;
    }

    withSeasonYear(): QueryMedia<Add<T, { seasonYear: ReqMedia["seasonYear"] }>> {
        this.query.add("seasonYear");
        return <never>this;
    }

    withSeasonInt(): QueryMedia<Add<T, { seasonInt: ReqMedia["seasonInt"] }>> {
        this.query.add("seasonInt");
        return <never>this;
    }

    withEpisodes(): QueryMedia<Add<T, { episodes: ReqMedia["episodes"] }>> {
        this.query.add("episodes");
        return <never>this;
    }

    withDuration(): QueryMedia<Add<T, { duration: ReqMedia["duration"] }>> {
        this.query.add("duration");
        return <never>this;
    }

    withChapters(): QueryMedia<Add<T, { chapters: ReqMedia["chapters"] }>> {
        this.query.add("chapters");
        return <never>this;
    }

    withVolumes(): QueryMedia<Add<T, { volumes: ReqMedia["volumes"] }>> {
        this.query.add("volumes");
        return <never>this;
    }

    withCountryOfOrigin(): QueryMedia<Add<T, { countryOfOrigin: ReqMedia["countryOfOrigin"] }>> {
        this.query.add("countryOfOrigin");
        return <never>this;
    }

    isLicensed(): QueryMedia<Add<T, { isLicensed: ReqMedia["isLicensed"] }>> {
        this.query.add("isLicensed");
        return <never>this;
    }

    withSource(): QueryMedia<Add<T, { source: ReqMedia["source"] }>> {
        this.query.add("source");
        return <never>this;
    }

    withTwitterHashtag(): QueryMedia<Add<T, { hashtag: ReqMedia["hashtag"] }>> {
        this.query.add("hashtag");
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): QueryMedia<Add<T, { trailer: ReqMedia["trailer"] }>> {
        const trailerQuery: Media["trailer"] = <never>(args.length ? `trailer {
            ${args.join(",\n            ")}
        }` : `trailer {
            id
        }`)

        this.query.add(trailerQuery);
        return <never>this;
    }

    updatedAt(): QueryMedia<Add<T, { updatedAt: ReqMedia["updatedAt"] }>> {
        this.query.add("updatedAt");
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

        this.query.add(coverImageQuery);
        return <never>this;
    }

    withBannerImage(): QueryMedia<Add<T, { bannerImage: ReqMedia["bannerImage"] }>> {
        this.query.add("bannerImage");
        return <never>this;
    }

    withGenres(): QueryMedia<Add<T, { genres: ReqMedia["genres"] }>> {
        this.query.add("genres");
        return <never>this;
    }

    withSynonyms(): QueryMedia<Add<T, { synonyms: ReqMedia["synonyms"] }>> {
        this.query.add("synonyms");
        return <never>this;
    }

    withAverageScore(): QueryMedia<Add<T, { averageScore: ReqMedia["averageScore"] }>> {
        this.query.add("averageScore");
        return <never>this;
    }

    withMeanScore(): QueryMedia<Add<T, { meanScore: ReqMedia["meanScore"] }>> {
        this.query.add("meanScore");
        return <never>this;
    }

    withPopularity(): QueryMedia<Add<T, { popularity: ReqMedia["popularity"] }>> {
        this.query.add("popularity");
        return <never>this;
    }

    isLocked(): QueryMedia<Add<T, { isLocked: ReqMedia["isLocked"] }>> {
        this.query.add("isLocked");
        return <never>this;
    }

    withTrending(): QueryMedia<Add<T, { trending: ReqMedia["trending"] }>> {
        this.query.add("trending");
        return <never>this;
    }

    withFavourites(): QueryMedia<Add<T, { favourites: ReqMedia["favourites"] }>> {
        this.query.add("favourites");
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): QueryMedia<Add<T, { tags: ReqMedia["tags"] }>> {
        const tagsQuery = <never>(args.length ? `tags {
            ${args.join(",\n            ")}
        }` : `tags {
            id
        }`)
        this.query.add(tagsQuery);
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

        this.query.add(relationsQuery);
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

        this.query.add(charactersQuery);
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

        this.query.add(staffQuery);
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

        this.query.add(studiosQuery);
        return <never>this;
    }

    isFavourite(): QueryMedia<Add<T, { isFavourite: ReqMedia["isFavourite"] }>> {
        this.query.add("isFavourite");
        return <never>this;
    }

    isFavouriteBlocked(): QueryMedia<Add<T, { isFavouriteBlocked: ReqMedia["isFavouriteBlocked"] }>> {
        this.query.add("isFavouriteBlocked");
        return <never>this;
    }

    isAdult(): QueryMedia<Add<T, { isAdult: ReqMedia["isAdult"] }>> {
        this.query.add("isAdult");
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): QueryMedia<Add<T, { nextAiringEpisode: ReqMedia["nextAiringEpisode"] }>> {
        const nextAiringEpisodeQuery = <never>(args.length ? `nextAiringEpisode {
            ${args.join(",\n            ")}
        }` : `nextAiringEpisode {
            id
        }`)
        this.query.add(nextAiringEpisodeQuery);
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

        this.query.add(airingScheduleQuery);
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

        this.query.add(trendsQuery);
        return <never>this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>): QueryMedia<Add<T, { externalLinks: ReqMedia["externalLinks"] }>> {
        const externalLinksQuery = <never>(args.length ? `externalLinks {
            ${args.join(",\n            ")}
        }` : `externalLinks {
            id
        }`)

        this.query.add(externalLinksQuery);
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

        this.query.add(streamingEpisodesQuery);
        return <never>this;
    }

    withRankings(...args: Array<keyof MediaRank>): QueryMedia<Add<T, { rankings: ReqMedia["rankings"] }>> {
        const rankingsQuery = <never>(args.length ? `rankings {
            ${args.join(",\n            ")}
        }` : `rankings {
            id
        }`)
        this.query.add(rankingsQuery);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): QueryMedia<Add<T, { mediaListEntry: ReqMedia["mediaListEntry"] }>> {
        const mediaListEntryQuery = <never>(args.length ? `mediaListEntry {
            ${args.join(",\n            ")}
        }` : `mediaListEntry {
            id
        }`)

        this.query.add(mediaListEntryQuery);
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

        this.query.add(reviewsQuery);
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

        this.query.add(recommendationsQuery);
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
        this.query.add(trailerQuery);
        return <never>this;
    }

    withSiteUrl(): QueryMedia<Add<T, { siteUrl: ReqMedia["siteUrl"] }>> {
        this.query.add("siteUrl");
        return <never>this;
    }

    withAutoCreateForumThread(): QueryMedia<Add<T, { autoCreateForumThread: ReqMedia["autoCreateForumThread"] }>> {
        this.query.add("autoCreateForumThread");
        return <never>this;
    }

    isRecommendationBlocked(): QueryMedia<Add<T, { isRecommendationBlocked: ReqMedia["isRecommendationBlocked"] }>> {
        this.query.add("isRecommendationBlocked");
        return <never>this;
    }

    isReviewBlocked(): QueryMedia<Add<T, { isReviewBlocked: ReqMedia["isReviewBlocked"] }>> {
        this.query.add("isReviewBlocked");
        return <never>this;
    }

    withModNotes(): QueryMedia<Add<T, { modNotes: ReqMedia["modNotes"] }>> {
        this.query.add("modNotes");
        return <never>this;
    }

    get raw(): string {
        return this.buildQuery();
    }
}