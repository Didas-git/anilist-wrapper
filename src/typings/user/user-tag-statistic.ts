import type { Statistic } from "../statistic";
import type { MediaTag } from "../media";

export interface UserTagStatistic extends Statistic {
    tag?: MediaTag | null;
}