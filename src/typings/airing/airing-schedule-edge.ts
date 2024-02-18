import type { AiringSchedule } from "./airing-schedule";
import type { IEdge } from "../edge";

export interface IAiringScheduleEdge extends IEdge<AiringSchedule> {
    id?: number | null;
}