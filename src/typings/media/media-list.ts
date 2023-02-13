import { Media, MediaListStatus } from ".";
import { FuzzyDate } from "../fuzzy-date";
import { User } from "../user";

export interface MediaList {
    id?: number;
    userId?: number;
    mediaId?: number;
    status?: MediaListStatus | null;
    score?: number | null;
    progress?: number | null;
    progressVolumes?: number | null;
    repeat?: number | null;
    priority?: number | null;
    private?: boolean | null;
    notes?: string | null;
    hiddenFromStatusLists?: boolean | null;

    /** Map of booleans for which custom lists the entry are in */
    customLists?: unknown;

    /** Map of advanced scores with name keys */
    advancedScores?: unknown;
    startedAt?: FuzzyDate | null;
    completedAt?: FuzzyDate | null;
    updatedAt?: number | null;
    createdAt?: number | null;
    media?: Media | null;
    user?: User | null;
}