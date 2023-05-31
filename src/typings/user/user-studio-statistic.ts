import type { Statistic } from "../statistic";
import type { Studio } from "../studio";

export interface UserStudioStatistic extends Statistic {
    studio?: Studio | null;
}