import { UserCountryStatistic, UserFormatStatistic, UserGenreStatistic, UserLengthStatistic, UserReleaseYearStatistic, UserScoreStatistic, UserStaffStatistic, UserStartYearStatistic, UserStatusStatistic, UserStudioStatistic, UserTagStatistic, UserVoiceActorStatistic } from ".";

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