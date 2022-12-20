import { IEdge } from "../edge";
import { Staff } from ".";

export interface StaffEdge extends IEdge<Staff> {
    id?: number | null;
    role?: string | null;
    favouriteOrder?: number | null;
}