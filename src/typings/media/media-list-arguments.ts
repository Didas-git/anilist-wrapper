/* eslint-disable @typescript-eslint/naming-convention */
import type { MediaListStatus } from "./media-list-status";
import type { MediaListSort } from "./media-list-sort";
import type { FuzzyDateInt } from "../fuzzy-date";
import type { MediaType } from "./media-type";

export interface MediaListArguments {
    id?: number;
    userId?: number;
    userName?: string;
    type?: MediaType;
    status?: MediaListStatus;
    mediaId?: number;
    isFollowing?: boolean;
    notes?: string;
    startedDate?: FuzzyDateInt;
    completedAt?: FuzzyDateInt;
    compareWithAuthList?: boolean;
    userId_in?: Array<number>;
    status_in?: Array<MediaListStatus>;
    status_not_in?: Array<MediaListStatus>;
    status_not?: MediaListStatus;
    mediaId_in?: Array<number>;
    mediaId_not_in?: Array<number>;
    notes_like?: string;
    startedAt_greater?: FuzzyDateInt;
    startedAt_lesser?: FuzzyDateInt;
    startedAt_like?: string;
    completedAt_greater?: FuzzyDateInt;
    completedAt_lesser?: FuzzyDateInt;
    completedAt_like?: string;
    sort?: Array<MediaListSort>;
}