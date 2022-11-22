import { Connection } from "../connection";
import { Studio, StudioEdge } from ".";

export interface StudioConnection extends Connection<StudioEdge, Studio> { }