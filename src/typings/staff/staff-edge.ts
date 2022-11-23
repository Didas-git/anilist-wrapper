import { Edge } from "../edge";
import { Staff } from ".";

export interface StaffEdge extends Edge<Staff> {
    id?: number | null;
    role?: string | null;
    favouriteOrder?: number | null;
}