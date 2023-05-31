import type { Media } from ".";

export interface MediaTrend {
    mediaId?: number;
    date?: number;
    trending?: number;
    averageScore?: number | null;
    popularity?: number | null;
    inProgress?: number | null;
    releasing?: boolean;
    episode?: number | null;
    media?: Media | null;
}