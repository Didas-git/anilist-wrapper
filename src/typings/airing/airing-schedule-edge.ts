import type { AiringSchedule } from "./airing-schedule";
import type { IEdge } from "../edge";

export interface AiringScheduleEdge extends IEdge<AiringSchedule> {
    id?: number | null;
}