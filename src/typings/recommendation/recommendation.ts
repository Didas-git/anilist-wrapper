import type { RecommendationRating } from ".";
import type { Media } from "../media";
import type { User } from "../user";

export interface Recommendation {
    id?: number;
    rating?: number | null;
    userRating?: RecommendationRating | null;
    media?: Media | null;
    mediaRecommendation?: Media | null;
    user?: User | null;
}