import { Statistic } from "../statistic";

export interface UserScoreStatistic extends Statistic {
    score?: number | null;
}