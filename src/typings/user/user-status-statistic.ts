import type { MediaListStatus } from "../media";
import type { Statistic } from "../statistic";

export interface UserStatusStatistic extends Statistic {
    status?: MediaListStatus | null;
}