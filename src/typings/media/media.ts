import { AiringSchedule, AiringScheduleConnection } from "../airing";
import { CharacterConnection } from "../character";
import { CountryCode } from "../country-code";
import { FuzzyDate } from "../fuzzy-date";
import { RecommendationConnection } from "../recommendation";
import { ReviewConnection } from "../review";
import { StaffConnection } from "../staff";
import { StudioConnection } from "../studio";
import {
    MediaConnection,
    MediaCoverImage,
    MediaExternalLink,
    MediaFormat,
    MediaRank,
    MediaSeason,
    MediaStats,
    MediaStatus,
    MediaStreamingEpisode,
    MediaTag, MediaTitle,
    MediaTrailer,
    MediaTrendConnection,
    MediaType,
    MediaSource,
    MediaList
} from ".";

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
    hashtag?: string | null;
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