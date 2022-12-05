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
    FuzzyDate
} from "./typings";

export interface MediaQuery<T> {
    fetch(raw?: false): Promise<T extends Media ? { [K in keyof T]: T[K] } : { id: number }>
    fetch(raw?: true): Promise<T extends Media ? { data: { Media: { [K in keyof T]: T[K] } } } : { data: { Media: { id: number } } }>
}

export class MediaQuery<T = {}> extends Query {
    protected options: MediaArguments = {
        type: "ANIME"
    };

    protected query = new Set<keyof Media>();
    protected preQuery = new Map<keyof Media, string>();
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

    withId(): MediaQuery<AddMedia<T, "id">> {
        this.query.add("id");
        return <never>this;
    }

    withMalId(): MediaQuery<AddMedia<T, "idMal">> {
        this.query.add("idMal");
        return <never>this;
    }

    withTitles(...args: Array<keyof MediaTitle>): MediaQuery<AddMedia<T, "title">> {
        const titleQuery: Media["title"] = <never>(args.length ? `title {
            ${args.join(",\n")}
        }` : `title {
            romaji
        }`);

        this.preQuery.has("title") && this.query.delete(<never>this.preQuery.get("title"));
        this.preQuery.set("title", titleQuery);
        return <never>this;
    }

    withType(): MediaQuery<AddMedia<T, "type">> {
        this.query.add("type");
        return <never>this;
    }

    withFormat(): MediaQuery<AddMedia<T, "format">> {
        this.query.add("format");
        return <never>this;
    }

    withStatus(): MediaQuery<AddMedia<T, "status">> {
        this.query.add("status");
        return <never>this;
    }

    withDescription(): MediaQuery<AddMedia<T, "description">> {
        this.query.add("description");
        return <never>this;
    }

    withStartDate(...args: Array<keyof FuzzyDate>): MediaQuery<AddMedia<T, "startDate">> {
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

    withEndDate(...args: Array<keyof FuzzyDate>): MediaQuery<AddMedia<T, "endDate">> {
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

    withSeason(): MediaQuery<AddMedia<T, "season">> {
        this.query.add("season");
        return <never>this;
    }

    withSeasonYear(): MediaQuery<AddMedia<T, "seasonYear">> {
        this.query.add("seasonYear");
        return <never>this;
    }

    withSeasonInt(): MediaQuery<AddMedia<T, "seasonInt">> {
        this.query.add("seasonInt");
        return <never>this;
    }

    withEpisodes(): MediaQuery<AddMedia<T, "episodes">> {
        this.query.add("episodes");
        return <never>this;
    }

    withDuration(): MediaQuery<AddMedia<T, "duration">> {
        this.query.add("duration");
        return <never>this;
    }

    withChapters(): MediaQuery<AddMedia<T, "chapters">> {
        this.query.add("chapters");
        return <never>this;
    }

    withVolumes(): MediaQuery<AddMedia<T, "volumes">> {
        this.query.add("volumes");
        return <never>this;
    }

    withCountryOfOrigin(): MediaQuery<AddMedia<T, "countryOfOrigin">> {
        this.query.add("countryOfOrigin");
        return <never>this;
    }

    isLicensed(): MediaQuery<AddMedia<T, "isLicensed">> {
        this.query.add("isLicensed");
        return <never>this;
    }

    withSource(): MediaQuery<AddMedia<T, "source">> {
        this.query.add("source");
        return <never>this;
    }

    withTwitterHashtag(): MediaQuery<AddMedia<T, "hashtag">> {
        this.query.add("hashtag");
        return <never>this;
    }

    withTrailer(...args: Array<keyof MediaTrailer>): MediaQuery<AddMedia<T, "trailer">> {
        const trailerQuery = <never>(args.length ? `trailer {
            ${args.join(",\n")}
        }` : `trailer {
            id
        }`)

        this.preQuery.has("trailer") && this.query.delete(<never>this.preQuery.get("trailer"));
        this.preQuery.set("trailer", trailerQuery);
        return <never>this;
    }

    updatedAt(): MediaQuery<AddMedia<T, "updatedAt">> {
        this.query.add("updatedAt");
        return <never>this;
    }

    withCoverImage(...args: Array<keyof MediaCoverImage>): MediaQuery<AddMedia<T, "coverImage">> {
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

    withBannerImage(): MediaQuery<AddMedia<T, "bannerImage">> {
        this.query.add("bannerImage");
        return <never>this;
    }

    withGenres(): MediaQuery<AddMedia<T, "genres">> {
        this.query.add("genres");
        return <never>this;
    }

    withSynonyms(): MediaQuery<AddMedia<T, "synonyms">> {
        this.query.add("synonyms");
        return <never>this;
    }

    withAverageScore(): MediaQuery<AddMedia<T, "averageScore">> {
        this.query.add("averageScore");
        return <never>this;
    }

    withMeanScore(): MediaQuery<AddMedia<T, "meanScore">> {
        this.query.add("meanScore");
        return <never>this;
    }

    withPopularity(): MediaQuery<AddMedia<T, "popularity">> {
        this.query.add("popularity");
        return <never>this;
    }

    isLocked(): MediaQuery<AddMedia<T, "isLocked">> {
        this.query.add("isLocked");
        return <never>this;
    }

    withTrending(): MediaQuery<AddMedia<T, "trending">> {
        this.query.add("trending");
        return <never>this;
    }

    withFavourites(): MediaQuery<AddMedia<T, "favourites">> {
        this.query.add("favourites");
        return <never>this;
    }

    withTags(...args: Array<keyof MediaTag>): MediaQuery<AddMedia<T, "tags">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "relations">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "characters">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "staff">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "studios">> {
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

    isFavourite(): MediaQuery<AddMedia<T, "isFavourite">> {
        this.query.add("isFavourite");
        return <never>this;
    }

    isFavouriteBlocked(): MediaQuery<AddMedia<T, "isFavouriteBlocked">> {
        this.query.add("isFavouriteBlocked");
        return <never>this;
    }

    isAdult(): MediaQuery<AddMedia<T, "isAdult">> {
        this.query.add("isAdult");
        return <never>this;
    }

    withNextAiringEpisode(...args: Array<keyof AiringSchedule>): MediaQuery<AddMedia<T, "nextAiringEpisode">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "airingSchedule">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "trends">> {
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

    withExternalLinks(...args: Array<keyof MediaExternalLink>): MediaQuery<AddMedia<T, "externalLinks">> {
        const externalLinksQuery = <never>(args.length ? `externalLinks {
            ${args.join(",\n")}
        }` : `externalLinks {
            id
        }`);

        this.preQuery.has("externalLinks") && this.query.delete(<never>this.preQuery.get("externalLinks"));
        this.preQuery.set("externalLinks", externalLinksQuery);
        return <never>this;
    }

    withStreamingEpisodes(...args: Array<keyof MediaStreamingEpisode>): MediaQuery<AddMedia<T, "streamingEpisodes">> {
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

    withRankings(...args: Array<keyof MediaRank>): MediaQuery<AddMedia<T, "rankings">> {
        const rankingsQuery = <never>(args.length ? `rankings {
            ${args.join(",\n")}
        }` : `rankings {
            id
        }`);

        this.preQuery.has("rankings") && this.query.delete(<never>this.preQuery.get("rankings"));
        this.preQuery.set("rankings", rankingsQuery);
        return <never>this;
    }

    withMediaListEntries(...args: Array<keyof MediaList>): MediaQuery<AddMedia<T, "mediaListEntry">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "reviews">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "recommendations">> {
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
    } = <never>{}): MediaQuery<AddMedia<T, "stats">> {
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

    withSiteUrl(): MediaQuery<AddMedia<T, "siteUrl">> {
        this.query.add("siteUrl");
        return <never>this;
    }

    withAutoCreateForumThread(): MediaQuery<AddMedia<T, "autoCreateForumThread">> {
        this.query.add("autoCreateForumThread");
        return <never>this;
    }

    isRecommendationBlocked(): MediaQuery<AddMedia<T, "isRecommendationBlocked">> {
        this.query.add("isRecommendationBlocked");
        return <never>this;
    }

    isReviewBlocked(): MediaQuery<AddMedia<T, "isReviewBlocked">> {
        this.query.add("isReviewBlocked");
        return <never>this;
    }

    withModNotes(): MediaQuery<AddMedia<T, "modNotes">> {
        this.query.add("modNotes");
        return <never>this;
    }
}