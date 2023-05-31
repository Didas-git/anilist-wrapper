import type { Connection } from "../connection";
import type { Staff, StaffEdge } from ".";

export interface StaffConnection extends Connection<StaffEdge, Staff> { }