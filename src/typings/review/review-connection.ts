import { Connection } from "../connection";
import { Review, ReviewEdge } from ".";

export interface ReviewConnection extends Connection<ReviewEdge, Review> { }