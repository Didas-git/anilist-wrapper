import { ScoreDistribution } from "../score";
import { StatusDistribution } from "../status-distribution";

export interface MediaStats {
    scoreDistribution?: Array<ScoreDistribution> | [];
    statusDistribution?: Array<StatusDistribution> | [];
}