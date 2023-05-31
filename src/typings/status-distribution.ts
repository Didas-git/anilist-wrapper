import type { MediaListStatus } from "./media";

export interface StatusDistribution {
    status?: MediaListStatus | null;
    amount?: number | null;
}