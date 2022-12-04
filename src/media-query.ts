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
    FuzzyDate
} from "./typings";

type ReqMedia = Required<Media>

export interface MediaQuery<T> {
    fetch(raw?: false): Promise<T extends Media ? { data: T }["data"] : { id: number }>
    fetch(raw?: true): Promise<T extends Media ? { data: { Media: T } } : { data: { Media: { id: number } } }>
}

export class MediaQuery<T = { empty: never }> extends Query {
    protected options: MediaArguments = {
        type: "ANIME"
    };

    protected query = new Set<keyof Media>();
    protected preQuery = new Map<keyof Media, string>();
    protected default: string = "id";
    protected type: string = "Media";
    constructor(name?: string, media?: Array<MediaArgs>)
    constructor(args?: MediaArguments, media?: Array<MediaArgs>)
    constructor(params?: MediaArguments | string, media?: Array<MediaArgs>) {
        super();

        if (typeof params === "string") this.options.search = params;
        else if (params) this.options = params;

        this.createQueryOptions(media);
    }

    protected buildQuery() {
        const { options, returns } = this.preBuild()
        return `query {
    Media(${options}) {
        ${returns}
    }
}`
    };

    arguments(options: MediaArguments, override: boolean = false) {
        this.options = override ? options : { ...this.options, ...options }
        return this;
    }

    withId(): MediaQuery<Add<T, { id: ReqMedia["id"] }>> {
        this.query.add("id");
        return <never>this;
    }

    withMalId(): MediaQuery<Add<T, { idMal: ReqMedia["idMal"] }>> {
        this.query.add("idMal");
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): MediaQuery<Add<T, { title: ReqMedia["title"] }>> {
        const titleQuery: Media["title"] = <never>(args.length ? `title {
            ${args.join(",\n")}
        }` : `title {
            romaji
        }`);

        this.preQuery.has("title") && this.query.delete(<never>this.preQuery.get("title"));
        this.preQuery.set("title", titleQuery);
        return <never>this;
    }

    withType(): MediaQuery<Add<T, { type: ReqMedia["type"] }>> {
        this.query.add("type");
        return <never>this;
    }

    withFormat(): MediaQuery<Add<T, { format: ReqMedia["format"] }>> {
        this.query.add("format");
        return <never>this;
    }

    withStatus(): MediaQuery<Add<T, { status: ReqMedia["status"] }>> {
        this.query.add("status");
        return <never>this;
    }

    withDescription(): MediaQuery<Add<T, { description: ReqMedia["description"] }>> {
        this.query.add("description");
        return <never>this;
    }

    withStartDate(...args: Array<keyof FuzzyDate>): MediaQuery<Add<T, { startDate: ReqMedia["startDate"] }>> {
        const startDateQuery = <never>(args.length ? `startDate {
            ${args.join(",\n")}
        }` : `startDate {
            year,
            month,
            day
        }`)

        this.preQuery.has("startDate") && this.query.delete(<never>this.preQuery.get("startDate"));
        this.preQuery.set("startDate", startDateQuery);
        return <never>this;
    }

    withEndDate(...args: Array<keyof FuzzyDate>): MediaQuery<Add<T, { endDate: ReqMedia["endDate"] }>> {
        const endDateQuery = <never>(args.length ? `endDate {
            ${args.join(",\n")}
        }` : `endDate {
            year,
            month,
            day
        }`)

        this.preQuery.has("endDate") && this.query.delete(<never>this.preQuery.get("endDate"));
        this.preQuery.set("endDate", endDateQuery);
        return <never>this;
    }

    withSeason(): MediaQuery<Add<T, { season: ReqMedia["season"] }>> {
        this.query.add("season");
        return <never>this;
    }

    withSeasonYear(): MediaQuery<Add<T, { seasonYear: ReqMedia["seasonYear"] }>> {
        this.query.add("seasonYear");
        return <never>this;
    }

    withSeasonInt(): MediaQuery<Add<T, { seasonInt: ReqMedia["seasonInt"] }>> {
        this.query.add("seasonInt");
        return <never>this;
    }

    withEpisodes(): MediaQuery<Add<T, { episodes: ReqMedia["episodes"] }>> {
        this.query.add("episodes");
        return <never>this;
    }

    withDuration(): MediaQuery<Add<T, { duration: ReqMedia["duration"] }>> {
        this.query.add("duration");
        return <never>this;
    }

    withChapters(): MediaQuery<Add<T, { chapters: ReqMedia["chapters"] }>> {
        this.query.add("chapters");
        return <never>this;
    }

    withVolumes(): MediaQuery<Add<T, { volumes: ReqMedia["volumes"] }>> {
        this.query.add("volumes");
        return <never>this;
    }

    withCountryOfOrigin(): MediaQuery<Add<T, { countryOfOrigin: ReqMedia["countryOfOrigin"] }>> {
        this.query.add("countryOfOrigin");
        return <never>this;
    }

    isLicensed(): MediaQuery<Add<T, { isLicensed: ReqMedia["isLicensed"] }>> {
        this.query.add("isLicensed");
        return <never>this;
    }

    withSource(): MediaQuery<Add<T, { source: ReqMedia["source"] }>> {
        this.query.add("source");
        return <never>this;
    }

    withTwitterHashtag(): MediaQuery<Add<T, { hashtag: ReqMedia["hashtag"] }>> {
        this.query.add("hashtag");
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): MediaQuery<Add<T, { trailer: ReqMedia["trailer"] }>> {
        const trailerQuery = <never>(args.length ? `trailer {
            ${args.join(",\n")}
        }` : `trailer {
            id
        }`)

        this.preQuery.has("trailer") && this.query.delete(<never>this.preQuery.get("trailer"));
        this.preQuery.set("trailer", trailerQuery);
        return <never>this;
    }

    updatedAt(): MediaQuery<Add<T, { updatedAt: ReqMedia["updatedAt"] }>> {
        this.query.add("updatedAt");
        return <never>this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>): MediaQuery<Add<T, { coverImage: ReqMedia["coverImage"] }>> {
        const coverImageQuery = <never>(args.length ? `coverImage {
            ${args.join(",\n")}
        }` : `coverImage {
            extraLarge,
            large,
            medium,
            color
        }`)

        this.preQuery.has("coverImage") && this.query.delete(<never>this.preQuery.get("coverImage"));
        this.preQuery.set("coverImage", coverImageQuery);
        return <never>this;
    }

    withBannerImage(): MediaQuery<Add<T, { bannerImage: ReqMedia["bannerImage"] }>> {
        this.query.add("bannerImage");
        return <never>this;
    }

    withGenres(): MediaQuery<Add<T, { genres: ReqMedia["genres"] }>> {
        this.query.add("genres");
        return <never>this;
    }

    withSynonyms(): MediaQuery<Add<T, { synonyms: ReqMedia["synonyms"] }>> {
        this.query.add("synonyms");
        return <never>this;
    }

    withAverageScore(): MediaQuery<Add<T, { averageScore: ReqMedia["averageScore"] }>> {
        this.query.add("averageScore");
        return <never>this;
    }

    withMeanScore(): MediaQuery<Add<T, { meanScore: ReqMedia["meanScore"] }>> {
        this.query.add("meanScore");
        return <never>this;
    }

    withPopularity(): MediaQuery<Add<T, { popularity: ReqMedia["popularity"] }>> {
        this.query.add("popularity");
        return <never>this;
    }

    isLocked(): MediaQuery<Add<T, { isLocked: ReqMedia["isLocked"] }>> {
        this.query.add("isLocked");
        return <never>this;
    }

    withTrending(): MediaQuery<Add<T, { trending: ReqMedia["trending"] }>> {
        this.query.add("trending");
        return <never>this;
    }

    withFavourites(): MediaQuery<Add<T, { favourites: ReqMedia["favourites"] }>> {
        this.query.add("favourites");
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): MediaQuery<Add<T, { tags: ReqMedia["tags"] }>> {
        const tagsQuery = <never>(args.length ? `tags {
            ${args.join(",\n")}
        }` : `tags {
            id
        }`);

        this.preQuery.has("tags") && this.query.delete(<never>this.preQuery.get("tags"));
        this.preQuery.set("tags", tagsQuery);
        return <never>this;
    }

    withRelations(options: {
        edges?: Array<keyof MediaEdge>,
        nodes?: Array<keyof Media>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { relations: ReqMedia["relations"] }>> {
        const { edges, nodes, pageInfo } = options;
        const relationsQuery = <never>(Object.keys(options).length ? `relations {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `relations {
            edges {
                id
            }
        }`);

        this.preQuery.has("relations") && this.query.delete(<never>this.preQuery.get("relations"));
        this.preQuery.set("relations", relationsQuery);
        return <never>this;
    }

    withCharacters(options: {
        edges?: Array<keyof CharacterEdge>,
        nodes?: Array<keyof Character>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { characters: ReqMedia["characters"] }>> {
        const { edges, nodes, pageInfo } = options;
        const charactersQuery = <never>(Object.keys(options).length ? `characters {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `characters {
            edges {
                id
            }
        }`);

        this.preQuery.has("characters") && this.query.delete(<never>this.preQuery.get("characters"));
        this.preQuery.set("characters", charactersQuery);
        return <never>this;
    }

    withStaff(options: {
        edges?: Array<keyof StaffEdge>,
        nodes?: Array<keyof Staff>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { staff: ReqMedia["staff"] }>> {
        const { edges, nodes, pageInfo } = options;
        const staffQuery = <never>(Object.keys(options).length ? `staff {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `staff {
            edges {
                id
            }
        }`);

        this.preQuery.has("staff") && this.query.delete(<never>this.preQuery.get("staff"));
        this.preQuery.set("staff", staffQuery);
        return <never>this;
    }

    withStudios(options: {
        edges?: Array<keyof StudioEdge>,
        nodes?: Array<keyof Studio>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { studios: ReqMedia["studios"] }>> {
        const { edges, nodes, pageInfo } = options;
        const studiosQuery = <never>(Object.keys(options).length ? `studios {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `studios {
            edges {
                id
            }
        }`);

        this.preQuery.has("studios") && this.query.delete(<never>this.preQuery.get("studios"));
        this.preQuery.set("studios", studiosQuery);
        return <never>this;
    }

    isFavourite(): MediaQuery<Add<T, { isFavourite: ReqMedia["isFavourite"] }>> {
        this.query.add("isFavourite");
        return <never>this;
    }

    isFavouriteBlocked(): MediaQuery<Add<T, { isFavouriteBlocked: ReqMedia["isFavouriteBlocked"] }>> {
        this.query.add("isFavouriteBlocked");
        return <never>this;
    }

    isAdult(): MediaQuery<Add<T, { isAdult: ReqMedia["isAdult"] }>> {
        this.query.add("isAdult");
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): MediaQuery<Add<T, { nextAiringEpisode: ReqMedia["nextAiringEpisode"] }>> {
        const nextAiringEpisodeQuery = <never>(args.length ? `nextAiringEpisode {
            ${args.join(",\n")}
        }` : `nextAiringEpisode {
            id
        }`);

        this.preQuery.has("nextAiringEpisode") && this.query.delete(<never>this.preQuery.get("nextAiringEpisode"));
        this.preQuery.set("nextAiringEpisode", nextAiringEpisodeQuery);
        return <never>this;
    }

    withAiringSchedule(options: {
        edges?: Array<keyof AiringScheduleEdge>,
        nodes?: Array<keyof AiringSchedule>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { airingSchedule: ReqMedia["airingSchedule"] }>> {
        const { edges, nodes, pageInfo } = options;
        const airingScheduleQuery = <never>(Object.keys(options).length ? `airingSchedule {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `airingSchedule {
            edges {
                id
            }
        }`);

        this.preQuery.has("airingSchedule") && this.query.delete(<never>this.preQuery.get("airingSchedule"));
        this.preQuery.set("airingSchedule", airingScheduleQuery);
        return <never>this;
    }

    withTrends(options: {
        edges?: Array<keyof MediaTrendEdge>,
        nodes?: Array<keyof MediaTrend>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { trends: ReqMedia["trends"] }>> {
        const { edges, nodes, pageInfo } = options;
        const trendsQuery = <never>(Object.keys(options).length ? `trends {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `trends {
            edges {
                id
            }
        }`);

        this.preQuery.has("trends") && this.query.delete(<never>this.preQuery.get("trends"));
        this.preQuery.set("trends", trendsQuery);
        return <never>this;
    }

    withExternalLinks(...args: Array<keyof MediaExternalLink>): MediaQuery<Add<T, { externalLinks: ReqMedia["externalLinks"] }>> {
        const externalLinksQuery = <never>(args.length ? `externalLinks {
            ${args.join(",\n")}
        }` : `externalLinks {
            id
        }`);

        this.preQuery.has("externalLinks") && this.query.delete(<never>this.preQuery.get("externalLinks"));
        this.preQuery.set("externalLinks", externalLinksQuery);
        return <never>this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): MediaQuery<Add<T, { streamingEpisodes: ReqMedia["streamingEpisodes"] }>> {
        const streamingEpisodesQuery = <never>(args.length ? `streamingEpisodes {
            ${args.join(",\n")}
        }` : `streamingEpisodes {
            title,
            thumbnail,
            url,
            site
        }`);

        this.preQuery.has("streamingEpisodes") && this.query.delete(<never>this.preQuery.get("streamingEpisodes"));
        this.preQuery.set("streamingEpisodes", streamingEpisodesQuery);
        return <never>this;
    }

    withRankings(...args: Array<keyof MediaRank>): MediaQuery<Add<T, { rankings: ReqMedia["rankings"] }>> {
        const rankingsQuery = <never>(args.length ? `rankings {
            ${args.join(",\n")}
        }` : `rankings {
            id
        }`);

        this.preQuery.has("rankings") && this.query.delete(<never>this.preQuery.get("rankings"));
        this.preQuery.set("rankings", rankingsQuery);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): MediaQuery<Add<T, { mediaListEntry: ReqMedia["mediaListEntry"] }>> {
        const mediaListEntryQuery = <never>(args.length ? `mediaListEntry {
            ${args.join(",\n")}
        }` : `mediaListEntry {
            id
        }`);

        this.preQuery.has("mediaListEntry") && this.query.delete(<never>this.preQuery.get("mediaListEntry"));
        this.preQuery.set("mediaListEntry", mediaListEntryQuery);
        return <never>this;
    }

    withReviews(options: {
        edges?: Array<keyof ReviewEdge>,
        nodes?: Array<keyof Review>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { reviews: ReqMedia["reviews"] }>> {
        const { edges, nodes, pageInfo } = options;
        const reviewsQuery = <never>(Object.keys(options).length ? `reviews {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `reviews {
            edges {
                id
            }
        }`);

        this.preQuery.has("reviews") && this.query.delete(<never>this.preQuery.get("reviews"));
        this.preQuery.set("reviews", reviewsQuery);
        return <never>this;
    }

    withRecommendations(options: {
        edges?: Array<keyof RecommendationEdge>,
        nodes?: Array<keyof Recommendation>,
        pageInfo?: Array<keyof PageInfo>
    } = <never>{}): MediaQuery<Add<T, { recommendations: ReqMedia["recommendations"] }>> {
        const { edges, nodes, pageInfo } = options;
        const recommendationsQuery = <never>(Object.keys(options).length ? `recommendations {
            ${edges?.length ? `edges {
                ${edges.join(",\n")}
            },`: ""}
            ${nodes?.length ? `nodes {
                ${nodes.join(",\n")}
            },`: ""}
            ${pageInfo?.length ? `pageInfo {
                ${pageInfo.join(",\n")}
            }`: ""}
        }` : `recommendations {
            edges {
                id
            }
        }`);

        this.preQuery.has("recommendations") && this.query.delete(<never>this.preQuery.get("recommendations"));
        this.preQuery.set("recommendations", recommendationsQuery);
        return <never>this;
    }

    withStats(options: {
        scoreDistribution?: Array<keyof ScoreDistribution>;
        statusDistribution?: Array<keyof StatusDistribution>;
    } = <never>{}): MediaQuery<Add<T, { stats: ReqMedia["stats"] }>> {
        const { scoreDistribution, statusDistribution } = options;
        const statsQuery = <never>(Object.keys(options).length ? `stats {
            ${scoreDistribution?.length ? `scoreDistribution {
                ${scoreDistribution.join(",\n")}
            },` : ""}
            ${statusDistribution?.length ? `statusDistribution {
                ${statusDistribution.join(",\n")}
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
        }`);

        this.preQuery.has("stats") && this.query.delete(<never>this.preQuery.get("stats"));
        this.preQuery.set("stats", statsQuery);
        return <never>this;
    }

    withSiteUrl(): MediaQuery<Add<T, { siteUrl: ReqMedia["siteUrl"] }>> {
        this.query.add("siteUrl");
        return <never>this;
    }

    withAutoCreateForumThread(): MediaQuery<Add<T, { autoCreateForumThread: ReqMedia["autoCreateForumThread"] }>> {
        this.query.add("autoCreateForumThread");
        return <never>this;
    }

    isRecommendationBlocked(): MediaQuery<Add<T, { isRecommendationBlocked: ReqMedia["isRecommendationBlocked"] }>> {
        this.query.add("isRecommendationBlocked");
        return <never>this;
    }

    isReviewBlocked(): MediaQuery<Add<T, { isReviewBlocked: ReqMedia["isReviewBlocked"] }>> {
        this.query.add("isReviewBlocked");
        return <never>this;
    }

    withModNotes(): MediaQuery<Add<T, { modNotes: ReqMedia["modNotes"] }>> {
        this.query.add("modNotes");
        return <never>this;
    }
}