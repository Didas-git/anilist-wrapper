import type { MediaListStatus } from "./media-list-status";
import type { MediaList } from "./media-list";

export interface MediaListGroup {
    entries?: Array<MediaList>;
    name?: string;
    isCustomList?: boolean;
    isSplitCompletedList?: boolean;
    status?: MediaListStatus;
}