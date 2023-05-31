import type { Statistic } from "../statistic";
import type { Staff } from "../staff";

export interface UserVoiceActorStatistic extends Statistic {
    voiceActor?: Staff | null;
    characterIds?: Array<number>;
}