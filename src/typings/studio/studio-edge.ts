import type { IEdge } from "../edge";
import type { Studio } from "./studio";

export interface IStudioEdge extends IEdge<Studio> {
    id?: number | null;
    isMain?: boolean;
    favouriteOrder?: number | null;
}