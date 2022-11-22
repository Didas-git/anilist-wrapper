import { Statistic } from "../statistic";

export interface UserGenreStatistic extends Statistic {
    genre?: string | null;
}