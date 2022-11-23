import { Edge } from "../edge";
import { AiringSchedule } from "./airing-schedule";

export interface AiringScheduleEdge extends Edge<AiringSchedule> {
    id?: number | null;
}