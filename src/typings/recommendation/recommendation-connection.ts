import type { Recommendation, RecommendationEdge } from ".";
import type { Connection } from "../connection";

export interface RecommendationConnection extends Connection<RecommendationEdge, Recommendation> { }