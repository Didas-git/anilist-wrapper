import { Connection } from "../connection";
import { Studio, IStudioEdge } from ".";

export interface StudioConnection extends Connection<IStudioEdge, Studio> { }