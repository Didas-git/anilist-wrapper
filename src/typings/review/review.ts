import type { Media, MediaType } from "../media";
import type { ReviewRating } from ".";
import type { User } from "../user";

export interface Review {
    id?: number;
    userId?: number;
    mediaId?: number;
    mediaType?: MediaType | null;
    summary?: string | null;
    body?: string | null;
    rating?: number | null;
    ratingAmount?: number | null;
    userRating?: ReviewRating | null;
    score?: number | null;
    private?: boolean | null;
    siteUrl?: string | null;
    createdAt?: number;
    updatedAt?: number;
    user?: User | null;
    media?: Media | null;
}