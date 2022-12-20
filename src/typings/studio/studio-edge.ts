import { IEdge } from "../edge";
import { Studio } from "./studio";

export interface StudioEdge extends IEdge<Studio> {
    id?: number | null;
    isMain?: boolean;
    favouriteOrder?: number | null;
}