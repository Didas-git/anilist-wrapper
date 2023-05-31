import type { Connection } from "../connection";
import type { Studio, IStudioEdge } from ".";

export interface StudioConnection extends Connection<IStudioEdge, Studio> { }