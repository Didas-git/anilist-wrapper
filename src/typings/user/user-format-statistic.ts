import { MediaFormat } from "../media";
import { Statistic } from "../statistic";

export interface UserFormatStatistic extends Statistic {
    format?: MediaFormat | null;
}