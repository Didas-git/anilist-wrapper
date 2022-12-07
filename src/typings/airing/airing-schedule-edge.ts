import { IEdge } from "../edge";
import { AiringSchedule } from "./airing-schedule";

export interface AiringScheduleEdge extends IEdge<AiringSchedule> {
    id?: number | null;
}