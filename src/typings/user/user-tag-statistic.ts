import { MediaTag } from "../media";
import { Statistic } from "../statistic";

export interface UserTagStatistic extends Statistic {
    tag?: MediaTag | null;
}