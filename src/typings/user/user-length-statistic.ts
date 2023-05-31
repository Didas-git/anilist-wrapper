import type { Statistic } from "../statistic";

export interface UserLengthStatistic extends Statistic {
    length?: string | null;
}