import type { MediaFormat, MediaRankType, MediaSeason } from ".";

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