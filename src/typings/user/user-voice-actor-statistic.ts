import { Staff } from "../staff";
import { Statistic } from "../statistic";

export interface UserVoiceActorStatistic extends Statistic {
    voiceActor?: Staff | null;
    characterIds?: Array<number>;
}