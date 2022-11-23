import { Connection } from "../connection";
import { Recommendation, RecommendationEdge } from ".";

export interface RecommendationConnection extends Connection<RecommendationEdge, Recommendation> { }