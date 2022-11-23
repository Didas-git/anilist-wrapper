import { Media } from "../media";

export interface AiringSchedule {
    id?: number;
    airingAt?: number;
    timeUntilAiring?: number;
    episode?: number;
    mediaId?: number;
    media?: Media | null;
}