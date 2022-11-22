import { Statistic } from "../statistic";
import { Studio } from "../studio";

export interface UserStudioStatistic extends Statistic {
    studio?: Studio | null;
}