import type { Connection } from "../connection";
import type { Review, ReviewEdge } from ".";

export interface ReviewConnection extends Connection<ReviewEdge, Review> { }