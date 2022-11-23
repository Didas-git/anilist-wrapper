import { Connection } from "../connection";
import { Staff, StaffEdge } from ".";

export interface StaffConnection extends Connection<StaffEdge, Staff> { }