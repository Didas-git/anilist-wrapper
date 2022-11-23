import { Statistic } from "../statistic";

export interface UserStartYearStatistic extends Statistic {
    startYear?: number | null;
}