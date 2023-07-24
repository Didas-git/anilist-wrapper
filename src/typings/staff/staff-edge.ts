import type { IEdge } from "../edge";
import type { Staff } from ".";

export interface IStaffEdge extends IEdge<Staff> {
    id?: number | null;
    role?: string | null;
    favouriteOrder?: number | null;
}