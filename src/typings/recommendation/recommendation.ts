import { RecommendationRating } from ".";
import { Media } from "../media";
import { User } from "../user";

export interface Recommendation {
    id?: number;
    rating?: number | null;
    userRating?: RecommendationRating | null;
    media?: Media | null;
    mediaRecommendation?: Media | null;
    user?: User | null;
}