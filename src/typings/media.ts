export interface Media {
    id?: number;
    idMal?: number | null;
    title?: MediaTitle | null;
    type?: MediaType | null;
    format?: MediaFormat | null;
    status?: MediaStatus | null;
    description?: string | null;
    startDate?: FuzzyDateInt | null;
    endDate?: FuzzyDateInt | null;
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
    startDate?: FuzzyDateInt;
    endDate?: FuzzyDateInt;
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
    startDate_greater?: FuzzyDateInt;
    startDate_lesser?: FuzzyDateInt;
    startDate_like?: string;
    endDate_greater?: FuzzyDateInt;
    endDate_lesser?: FuzzyDateInt;
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
    sort?: Array<MediaSort>;
}

/** YYYYMMDD */
export type FuzzyDateInt = number;

export interface FuzzyDate {
    year?: number | null;
    month?: number | null;
    day?: number | null;
}

export type MediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL";

export type MediaType = "ANIME" | "MANGA";

export type MediaFormat = "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC" | "MANGA" | "NOVEL" | "ONE_SHOT";

export type MediaStatus = "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS";

export type MediaListStatus = "CURRENT" | "PLANNING" | "COMPLETED" | "DROPPED" | "PAUSED" | "REPEATING";

export type MediaSource = "ORIGINAL" | "MANGA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "VIDEO_GAME" | "OTHER" | "NOVEL" | "DOUJINSHI" | "ANIME" | "WEB_NOVEL" | "LIVE_ACTION" | "GAME" | "COMIC" | "MULTIMEDIA_PROJECT" | "PICTURE_BOOK";

/** ISO 3166-1 alpha-2 country code */
export type CountryCode = string;

export type MediaSort = "ID" | "ID_DESC" | "TITLE_ROMAJI" | "TITLE_ROMAJI_DESC" | "TITLE_ENGLISH" | "TITLE_ENGLISH_DESC" | "TITLE_NATIVE" | "TITLE_NATIVE_DESC" | "TYPE" | "TYPE_DESC" | "FORMAT" | "FORMAT_DESC" | "START_DATE" | "START_DATE_DESC" | "END_DATE" | "END_DATE_DESC" | "SCORE" | "SCORE_DESC" | "POPULARITY" | "POPULARITY_DESC" | "TRENDING" | "TRENDING_DESC" | "EPISODES" | "EPISODES_DESC" | "DURATION" | "DURATION_DESC" | "STATUS" | "STATUS_DESC" | "CHAPTERS" | "CHAPTERS_DESC" | "VOLUMES" | "VOLUMES_DESC" | "UPDATED_AT" | "UPDATED_AT_DESC" | "SEARCH_MATCH" | "FAVOURITES" | "FAVOURITES_DESC";

export type MediaRelation = "ADAPTATION" | "PREQUEL" | "SEQUEL" | "PARENT" | "SIDE_STORY" | "CHARACTER" | "SUMMARY" | "ALTERNATIVE" | "SPIN_OFF" | "OTHER" | "SOURCE" | "COMPILATION" | "CONTAINS";

export type CharacterRole = "MAIN" | "SUPPORTING" | "BACKGROUND";

export type ExternalLinkType = "INFO" | "STREAMING" | "SOCIAL";

export type MediaRankType = "RATED" | "POPULAR";

export type ReviewRating = "NO_VOTE" | "UP_VOTE" | "DOWN_VOTE";

export type RecommendationRating = "NO_RATING" | "RATE_UP" | "RATE_DOWN";

export type UserTitleLanguage = "ROMAJI" | "ENGLISH" | "NATIVE" | "ROMAJI_STYLISED" | "ENGLISH_STYLISED" | "NATIVE_STYLISED";

export type NotificationType = "ACTIVITY_MESSAGE" | "ACTIVITY_REPLY" | "FOLLOWING" | "ACTIVITY_MENTION" | "THREAD_COMMENT_MENTION" | "THREAD_SUBSCRIBED" | "THREAD_COMMENT_REPLY" | "AIRING" | "ACTIVITY_LIKE" | "ACTIVITY_REPLY_LIKE" | "THREAD_LIKE" | "THREAD_COMMENT_LIKE" | "ACTIVITY_REPLY_SUBSCRIBED" | "RELATED_MEDIA_ADDITION" | "MEDIA_DATA_CHANGE" | "MEDIA_MERGE" | "MEDIA_DELETION";

export type UserStaffNameLanguage = "ROMAJI_WESTERN" | "ROMAJI" | "NATIVE";

export type ScoreFormat = "POINT_100" | "POINT_10_DECIMAL" | "POINT_10" | "POINT_5" | "POINT_3";

export type ModRole = "ADMIN" | "LEAD_DEVELOPER" | "DEVELOPER" | "LEAD_COMMUNITY" | "COMMUNITY" | "DISCORD_COMMUNITY" | "LEAD_ANIME_DATA" | "ANIME_DATA" | "LEAD_MANGA_DATA" | "MANGA_DATA" | "LEAD_SOCIAL_MEDIA" | "SOCIAL_MEDIA" | "RETIRED";

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

export interface MediaEdge {
    node?: Media | null;
    id?: number | null;
    relationType?: MediaRelation | null;
    isMainStudio?: boolean;
    characters?: Array<Character> | [];
    characterRole?: CharacterRole | null;
    characterName?: string | null;
    roleNotes?: string | null;
    dubGroup?: string | null;
    staffRole?: string | null;
    voiceActors?: Array<Staff> | [];
    voiceActorRoles?: Array<StaffRoleType> | [];
    favouriteOrder?: number | null;
}

export interface Character {
    id?: number;
    name?: CharacterName | null;
    image?: CharacterImage | null;
    description?: string | null;
    gender?: string | null;
    dateOfBirth?: FuzzyDate;
    age?: string | null;
    bloodType?: string | null;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    siteUrl?: string | null;
    media?: MediaConnection | null;
    favourites?: number | null;
    modNotes?: string | null;
}

export interface CharacterName {
    first?: string | null;
    middle?: string | null;
    last?: string | null;
    full?: string | null;
    native?: string | null;
    alternative?: Array<string> | [];
    alternativeSpoiler?: Array<string> | [];
    userPreferred?: string | null;
}

export interface CharacterImage {
    large?: string | null;
    medium?: string | null;
}

export interface Staff {
    id?: number;
    name?: StaffName | null;
    languageV2?: string | null;
    image?: StaffImage | null;
    description?: string | null;
    primaryOccupations?: Array<string> | [];
    gender?: string | null;
    dateOfBirth?: FuzzyDate | null;
    dateOfDeath?: FuzzyDate | null;
    age?: number | null;
    yearsActive?: Array<number> | [];
    homeTown?: string | null;
    bloodType?: string | null;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    siteUrl?: string | null;
    staffMedia?: MediaConnection | null;
    characters?: CharacterConnection | null;
    characterMedia?: MediaConnection | null;
    staff?: Staff | null;
    submitter?: User | null;
    submissionStatus?: number | null;
    submissionNotes?: string | null;
    favourites?: number | null;
    modNotes?: string | null;
}

export interface StaffName {
    first?: string | null;
    middle?: string | null;
    last?: string | null;
    full?: string | null;
    native?: string | null;
    alternative?: Array<string> | [];
    userPreferred?: string | null;
}

export interface StaffImage {
    large?: string | null;
    medium?: string | null;
}

export interface StaffRoleType {
    voiceActor?: Staff | null;
    roleNotes?: string | null;
    dubGroup?: string | null;
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

export interface MediaList {
    id?: number;
    userId?: number;
    mediaId?: number;
    status?: MediaListStatus | null;
    score?: number | null;
    progress?: number | null;
    progressVolumes?: number | null;
    repeat?: number | null;
    priority?: number | null;
    private?: boolean | null;
    notes?: string | null;
    hiddenFromStatusLists?: boolean | null;
    /** Map of booleans for which custom lists the entry are in */
    customLists?: unknown;
    /** Map of advanced scores with name keys */
    advancedScores?: unknown;
    startedAt?: FuzzyDate | null;
    completedAt?: FuzzyDate | null;
    updatedAt?: number | null;
    createdAt?: number | null;
    media?: Media | null;
    user?: User | null;
}

export interface CharacterEdge {
    node?: Character | null;
    id?: number | null;
    role?: CharacterRole | null;
    name?: string | null;
    voiceActors?: Array<Staff> | [];
    voiceActorRoles?: Array<StaffRoleType> | [];
    media?: Array<Media> | [];
    favouriteOrder?: number | null;
}

export interface StaffConnection {
    edges?: Array<StaffEdge> | [];
    nodes?: Array<Staff> | [];
    pageInfo?: PageInfo | null;
}

export interface StaffEdge {
    node?: Staff | null;
    id?: number | null;
    role?: string | null;
    favouriteOrder?: number | null;
}

export interface StudioConnection {
    edges?: Array<StudioEdge> | [];
    nodes?: Array<Studio> | [];
    pageInfo?: PageInfo | null;
}

export interface StudioEdge {
    node?: Studio | null;
    id?: number | null;
    isMain?: boolean;
    favouriteOrder?: number | null;
}

export interface Studio {
    id?: number;
    name?: string;
    isAnimationStudio?: boolean;
    media?: MediaConnection | null;
    siteUrl?: string | null;
    isFavourite?: boolean;
    favourites?: number | null;
}

export interface AiringSchedule {
    id?: number;
    airingAt?: number;
    timeUntilAiring?: number;
    episode?: number;
    mediaId?: number;
    media?: Media | null;
}

export interface AiringScheduleConnection {
    edges?: Array<AiringScheduleEdge> | [];
    nodes?: Array<AiringSchedule> | [];
    pageInfo: PageInfo | null;
}

export interface AiringScheduleEdge {
    node?: AiringSchedule | null;
    id?: number | null;
}

export interface MediaTrendConnection {
    edges?: Array<MediaTrendEdge> | [];
    nodes?: Array<MediaTrend> | [];
    pageInfo?: PageInfo | null;
}

export interface MediaTrendEdge {
    node?: MediaTrend | null;
}

export interface MediaTrend {
    mediaId?: number;
    date?: number;
    trending?: number;
    averageScore?: number | null;
    popularity?: number | null;
    inProgress?: number | null;
    releasing?: boolean;
    episode?: number | null;
    media?: Media | null;
}

export interface MediaExternalLink {
    id?: number;
    url?: string | null;
    site?: string;
    siteId?: number | null;
    type?: ExternalLinkType | null;
    language?: string | null;
    color?: string | null;
    icon?: string | null;
    notes?: string | null;
    isDisabled?: boolean | null;
}

export interface MediaStreamingEpisode {
    title?: string | null;
    thumbnail?: string | null;
    url?: string | null;
    site?: string | null;
}

export interface MediaRank {
    id?: number;
    rank?: number;
    type?: MediaRankType;
    format?: MediaFormat;
    year?: number | null;
    season?: MediaSeason;
    allTime?: boolean | null;
    context?: string;
}

export interface ReviewConnection {
    edges?: Array<ReviewEdge> | [];
    nodes?: Array<Review> | [];
    pageInfo?: PageInfo | null;
}

export interface ReviewEdge {
    node?: Review | null;
}

export interface Review {
    id?: number;
    userId?: number;
    mediaId?: number;
    mediaType?: MediaType | null;
    summary?: string | null;
    body?: string | null;
    rating?: number | null;
    ratingAmount?: number | null;
    userRating?: ReviewRating | null;
    score?: number | null;
    private?: boolean | null;
    siteUrl?: string | null;
    createdAt?: number;
    updatedAt?: number;
    user?: User | null;
    media?: Media | null;
}

export interface RecommendationConnection {
    edges?: Array<RecommendationEdge> | [];
    nodes?: Array<Recommendation> | [];
    pageInfo?: PageInfo | null;
}

export interface RecommendationEdge {
    node?: Recommendation | null;
}

export interface Recommendation {
    id?: number;
    rating?: number | null;
    userRating?: RecommendationRating | null;
    media?: Media | null;
    mediaRecommendation?: Media | null;
    user?: User | null;
}

export interface MediaStats {
    scoreDistribution?: Array<ScoreDistribution> | [];
    statusDistribution?: Array<StatusDistribution> | [];
}

export interface ScoreDistribution {
    score?: number | null;
    amount?: number | null;
}

export interface StatusDistribution {
    status?: MediaListStatus | null;
    amount?: number | null;
}

export interface User {
    id?: number;
    name?: string;
    about?: string | null;
    avatar?: UserAvatar | null;
    bannerImage?: string | null;
    isFollowing?: boolean | null;
    isFollower?: boolean | null;
    isBlocked?: boolean | null;
    bans?: unknown;
    options?: UserOptions | null;
    mediaListOptions?: MediaListOptions | null;
    favourites?: Favourites | null;
    statistics?: UserStatisticTypes | null;
    unreadNotificationCount?: number | null;
    siteUrl?: string | null;
    donatorTier?: number | null;
    donatorBadge?: string | null;
    moderatorRoles?: Array<ModRole> | [];
    createdAt?: number | null;
    updatedAt?: number | null;
    previousNames?: Array<UserPreviousName> | [];
}

export interface UserAvatar {
    large?: string | null;
    medium?: string | null;
}

export interface Favourites {
    anime?: MediaConnection;
    manga?: MediaConnection;
    characters?: CharacterConnection;
    staff?: StaffConnection;
    studios?: StudioConnection;
}

export interface UserOptions {
    titleLanguage?: UserTitleLanguage | null;
    displayAdultContent?: boolean | null;
    airingNotifications?: boolean | null;
    profileColor?: string | null;
    notificationOptions?: Array<NotificationOption> | [];
    timezone?: string | null;
    activityMergeTime?: number | null;
    staffNameLanguage?: UserStaffNameLanguage | null;
    restrictMessagesToFollowing?: boolean | null;
    disabledListActivity?: Array<ListActivityOption> | [];
}

export interface NotificationOption {
    type?: NotificationType | null;
    enabled?: boolean | null;
}

export interface ListActivityOption {
    disabled?: boolean | null;
    type?: MediaListStatus | null;
}

export interface MediaListOptions {
    scoreFormat?: ScoreFormat | null;
    rowOrder?: string | null;
    animeList?: MediaListTypeOptions | null;
    mangaList?: MediaListTypeOptions | null;
}

export interface MediaListTypeOptions {
    sectionOrder?: Array<string> | [];
    splitCompletedSectionByFormat?: boolean | null;
    customLists?: Array<string> | [];
    advancedScoring?: Array<string> | [];
    advancedScoreingEnabled?: boolean | null;
}

export interface UserStatisticTypes {
    anime?: UserStatistics | null;
    manga?: UserStatistics | null;
}

export interface UserStatistics {
    count?: number;
    meanScore?: number;
    standardDeviation?: number;
    minutesWatched?: number;
    episodesWatched?: number;
    chaptersRead?: number;
    volumesRead?: number;
    formats?: Array<UserFormatStatistic> | [];
    statuses?: Array<UserStatusStatistic> | [];
    scores?: Array<UserScoreStatistic> | [];
    lengths?: Array<UserLengthStatistic> | [];
    releaseYears?: Array<UserReleaseYearStatistic> | [];
    startYears?: Array<UserStartYearStatistic> | [];
    genres?: Array<UserGenreStatistic> | [];
    tags?: Array<UserTagStatistic> | [];
    countries?: Array<UserCountryStatistic> | [];
    voiceActors?: Array<UserVoiceActorStatistic> | [];
    staff?: Array<UserStaffStatistic> | [];
    studios?: Array<UserStudioStatistic> | [];
}

export interface UserFormatStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    format?: MediaFormat | null;
}

export interface UserStatusStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    status?: MediaListStatus | null;
}

export interface UserScoreStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    score?: number | null;
}

export interface UserLengthStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    length?: string | null;
}

export interface UserReleaseYearStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    releaseYear?: number | null;
}

export interface UserStartYearStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    startYear?: number | null;
}

export interface UserGenreStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    genre?: string | null;
}

export interface UserTagStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    tag?: MediaTag | null;
}

export interface UserCountryStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    country?: CountryCode | null;
}

export interface UserVoiceActorStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    voiceActor?: Staff | null;
    characterIds?: Array<number>;
}

export interface UserStaffStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    staff?: Staff | null;
}

export interface UserStudioStatistic {
    count?: number;
    meanScore?: number;
    minutesWatched?: number;
    chaptersRead?: number;
    mediaIds?: Array<number>;
    studio?: Studio | null;
}

export interface UserPreviousName {
    name?: string | null;
    createdAt?: number | null;
    updatedAt?: number | null;
}