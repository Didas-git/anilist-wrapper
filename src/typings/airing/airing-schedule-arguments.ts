import type { AiringSort } from "./airing-sort";

/* eslint-disable @typescript-eslint/naming-convention */
export interface AiringScheduleArguments {
    id?: number;
    mediaId?: number;
    episode?: number;
    airingAt?: number;
    notYetAired?: boolean;
    id_not?: number;
    id_in?: Array<number>;
    id_not_in?: Array<number>;
    mediaId_not?: number;
    mediaId_in?: Array<number>;
    mediaId_not_in?: Array<number>;
    episode_not?: number;
    episode_in?: Array<number>;
    episode_not_in?: Array<number>;
    episode_greater?: number;
    episode_lesser?: number;
    airingAt_greater?: number;
    airingAt_lesser?: number;
    sort?: Array<AiringSort>;
}