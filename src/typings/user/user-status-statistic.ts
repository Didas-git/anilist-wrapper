import { MediaListStatus } from "../media";
import { Statistic } from "../statistic";

export interface UserStatusStatistic extends Statistic {
    status?: MediaListStatus | null;
}