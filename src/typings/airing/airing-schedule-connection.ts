import type { AiringSchedule, AiringScheduleEdge } from ".";
import type { Connection } from "../connection";

export interface AiringScheduleConnection extends Connection<AiringScheduleEdge, AiringSchedule> { }