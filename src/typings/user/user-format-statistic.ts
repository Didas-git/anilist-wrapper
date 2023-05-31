import type { Statistic } from "../statistic";
import type { MediaFormat } from "../media";

export interface UserFormatStatistic extends Statistic {
    format?: MediaFormat | null;
}