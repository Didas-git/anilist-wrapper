import { Edge } from "../edge";
import { Studio } from "./studio";

export interface StudioEdge extends Edge<Studio> {
    id?: number | null;
    isMain?: boolean;
    favouriteOrder?: number | null;
}