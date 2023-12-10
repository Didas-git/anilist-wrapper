import type { AiringSchedule, IAiringScheduleEdge } from ".";
import type { Connection } from "../connection";

export interface AiringScheduleConnection extends Connection<IAiringScheduleEdge, AiringSchedule> { }