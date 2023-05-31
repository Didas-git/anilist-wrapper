import type { Statistic } from "../statistic";

export interface UserReleaseYearStatistic extends Statistic {
    releaseYear?: number | null;
}