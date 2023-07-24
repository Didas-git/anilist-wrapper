import type { MediaTrendSort } from "./media-trend-sort";

/* eslint-disable @typescript-eslint/naming-convention */
export interface MediaTrendArguments {
    mediaId?: number;
    date?: number;
    trending?: number;
    averageScore?: number;
    popularity?: number;
    episode?: number;
    releasing?: boolean;
    mediaId_not?: number;
    mediaId_in?: Array<number>;
    mediaId_not_in?: Array<number>;
    date_greater?: number;
    date_lesser?: number;
    trending_greater?: number;
    trending_lesser?: number;
    trending_not?: number;
    averageScore_greater?: number;
    averageScore_lesser?: number;
    averageScore_not?: number;
    popularity_greater?: number;
    popularity_lesser?: number;
    popularity_not?: number;
    episode_greater?: number;
    episode_lesser?: number;
    episode_not?: number;
    sort?: Array<MediaTrendSort>;
}