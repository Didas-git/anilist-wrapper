import type { Connection } from "../connection";
import type { Staff, IStaffEdge } from ".";

export interface StaffConnection extends Connection<IStaffEdge, Staff> { }