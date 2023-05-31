import type { StatusDistribution } from "../status-distribution";
import type { ScoreDistribution } from "../score";

export interface MediaStats {
    scoreDistribution?: Array<ScoreDistribution> | [];
    statusDistribution?: Array<StatusDistribution> | [];
}