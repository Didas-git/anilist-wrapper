export interface Media {
    id?: number;
    idMal?: number | null;
    title?: MediaTitle | null;
    type?: MediaType | null;
    format?: MediaFormat | null;
    status?: MediaStatus | null;
    description?: string | null;
    startDate?: FuzzyDate | null;
    endDate?: FuzzyDate | null;
    season?: MediaSeason | null;
    seasonYear?: number | null;
    seasonInt?: number | null;
    episodes?: number | null;
    duration?: number | null;
    chapters?: number | null;
    volumes?: number | null;
    countryOfOrigin?: CountryCode | null;
    isLicensed?: boolean | null;
    source?: MediaSource | null;
    hastag?: string | null;
    trailer?: MediaTrailer | null;
    updatedAt?: number | null;
    coverImage?: MediaCoverImage | null;
    bannerImage?: string | null;
    genres?: Array<string> | [];
    synonyms?: Array<string> | [];
    averageScore?: number | null;
    meanScore?: number | null;
    popularity?: number | null;
    isLocked?: boolean | null;
    trending?: number | null;
    favourites?: number | null;
    tags?: Array<MediaTag> | [];
    relations?: MediaConnection | null;
    characters?: CharacterConnection | null;
    staff?: StaffConnection | null;
    studios?: StudioConnection | null;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    isAdult?: boolean | null;
    nextAiringEpisode?: AiringSchedule | null;
    airingSchedule?: AiringScheduleConnection | null;
    trends?: MediaTrendConnection | null;
    externalLinks?: Array<MediaExternalLink> | [];
    streamingEpisodes?: Array<MediaStreamingEpisode> | [];
    rankings?: Array<MediaRank> | [];
    mediaListEntry?: MediaList | null;
    reviews?: ReviewConnection | null;
    recommendations?: RecommendationConnection | null;
    stats?: MediaStats | null;
    siteUrl?: string | null;
    autoCreateForumThread?: boolean | null;
    isRecommendationBlocked?: boolean | null;
    isReviewBlocked?: boolean | null;
    modNotes?: string | null;
}

export interface MediaQuery {
    id?: number;
    idMal?: number;
    startDate?: FuzzyDate;
    endDate?: FuzzyDate;
    season?: MediaSeason;
    seasonYear?: number;
    type?: MediaType;
    format?: MediaFormat;
    status?: MediaStatus;
    episodes?: number;
    duration?: number;
    chapters?: number;
    volumes?: number;
    isAdult?: boolean;
    genre?: string;
    tag?: string;
    minimumTagRank?: number;
    tagCategory?: string;
    onList?: boolean;
    licensedBy?: string;
    licensedById?: number;
    averageScore?: number;
    popularity?: number;
    source?: MediaSource;
    countryOfOrigin?: CountryCode;
    isLicensed?: boolean;
    search?: string;
    id_not?: number;
    id_in?: Array<number>;
    id_not_in?: Array<number>;
    idMal_not?: number;
    idMal_in?: Array<number>;
    idMal_not_in?: Array<number>;
    startDate_greater?: FuzzyDate;
    startDate_lesser?: FuzzyDate;
    startDate_like?: string;
    endDate_greater?: FuzzyDate;
    endDate_lesser?: FuzzyDate;
    endDate_like?: string;
    format_in?: Array<MediaFormat>;
    format_not?: MediaFormat;
    format_not_in?: Array<MediaFormat>;
    status_in?: Array<MediaStatus>;
    status_not?: MediaStatus;
    status_not_in?: Array<MediaStatus>;
    episodes_greater?: number;
    episodes_lesser?: number;
    duration_greater?: number;
    duration_lesser?: number;
    chapters_greater?: number;
    chapters_lesser?: number;
    volumes_greater?: number;
    volumes_lesser?: number;
    genre_in?: Array<string>;
    genre_not_in?: Array<string>;
    tag_in?: Array<string>;
    tag_not_in?: Array<string>;
    tagCategory_in?: Array<string>;
    tagCategory_not_in?: Array<string>;
    licensedBy_in?: Array<string>;
    licensedById_in?: Array<number>;
    averageScore_not?: number;
    averageScore_greater?: number;
    averageScore_lesser?: number;
    popularity_not?: number;
    popularity_greater?: number;
    popularity_lesser?: number;
    source_in?: Array<MediaSource>;
    sort?: Array<MediaSort>
}

/** YYYYMMDD */
export type FuzzyDate = number;

export type MediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type MediaType = "ANIME" | "MANGA";

export type MediaFormat = "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC" | "MANGA" | "NOVEL" | "ONE_SHOT";

export type MediaStatus = "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS";

export type MediaSource = "ORIGINAL" | "MANGA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "VIDEO_GAME" | "OTHER" | "NOVEL" | "DOUJINSHI" | "ANIME" | "WEB_NOVEL" | "LIVE_ACTION" | "GAME" | "COMIC" | "MULTIMEDIA_PROJECT" | "PICTURE_BOOK";

/** ISO 3166-1 alpha-2 country code */
export type CountryCode = string;

export type MediaSort = "ID" | "ID_DESC" | "TITLE_ROMAJI" | "TITLE_ROMAJI_DESC" | "TITLE_ENGLISH" | "TITLE_ENGLISH_DESC" | "TITLE_NATIVE" | "TITLE_NATIVE_DESC" | "TYPE" | "TYPE_DESC" | "FORMAT" | "FORMAT_DESC" | "START_DATE" | "START_DATE_DESC" | "END_DATE" | "END_DATE_DESC" | "SCORE" | "SCORE_DESC" | "POPULARITY" | "POPULARITY_DESC" | "TRENDING" | "TRENDING_DESC" | "EPISODES" | "EPISODES_DESC" | "DURATION" | "DURATION_DESC" | "STATUS" | "STATUS_DESC" | "CHAPTERS" | "CHAPTERS_DESC" | "VOLUMES" | "VOLUMES_DESC" | "UPDATED_AT" | "UPDATED_AT_DESC" | "SEARCH_MATCH" | "FAVOURITES" | "FAVOURITES_DESC";

export interface MediaTitle {
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
    userPreferred?: string | null;
};

export interface MediaTrailer {
    id?: string | null;
    site?: string | null;
    thumbnail?: string | null;
}

export interface MediaCoverImage {
    extraLarge?: string | null;
    large?: string | null;
    medium?: string | null;
    color?: string | null;
}

export interface MediaTag {
    id?: number;
    name?: string;
    description?: string | null;
    category?: string | null;
    rank?: number | null;
    isGeneralSpoiler?: boolean | null;
    isMediaSpoiler?: boolean | null;
    isAdult?: boolean | null;
    userId?: number | null;
}

export interface MediaConnection {
    edges?: Array<MediaEdge> | [];
    nodes?: Array<Media> | [];
    pageInfo?: PageInfo | null;
}

export interface PageInfo {
    total?: number | null;
    perPage?: number | null;
    currentPage?: number | null;
    lastPage?: number | null;
    hasNextPage?: boolean | null;
}

export interface CharacterConnection {
    edges?: Array<CharacterEdge> | [];
    nodes?: Array<Character> | [];
    pageInfo?: PageInfo | null;
}

export interface MediaList { }