/* eslint-disable @typescript-eslint/naming-convention */
import type { MediaListStatus } from "./media-list-status";
import type { MediaListSort } from "./media-list-sort";
import type { FuzzyDateInt } from "../fuzzy-date";
import type { MediaType } from "./media-type";

export interface MediaListCollectionArguments {
    userId?: number;
    userName?: string;
    type?: MediaType;
    status?: MediaListStatus;
    notes?: string;
    startedAt?: FuzzyDateInt;
    completedAt?: FuzzyDateInt;
    forceSingleCompletedList?: boolean;
    chunk?: number;
    perChunk?: number;
    status_in?: Array<MediaListStatus>;
    status_not_in?: Array<MediaListStatus>;
    status_not?: MediaListStatus;
    notes_like?: string;
    startedAt_greater?: FuzzyDateInt;
    startedAt_lesser?: FuzzyDateInt;
    startedAt_like?: string;
    completedAt_greater?: FuzzyDateInt;
    completedAt_lesser?: FuzzyDateInt;
    completedAt_like?: string;
    sort?: Array<MediaListSort>;
}