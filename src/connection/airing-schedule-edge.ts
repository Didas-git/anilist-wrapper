import { AiringScheduleQuery } from "src/queries";
import type { ExtractAiringSchedule, IAiringScheduleEdge } from "src/typings";
import { Edge } from "./edge";

export interface AiringScheduleEdge<T> {
    withNode: <K extends AiringScheduleQuery>(node: K | ((node: AiringScheduleQuery) => K)) => AiringScheduleEdge<T & { node: ExtractAiringSchedule<K> }>;
}

export class AiringScheduleEdge<T = {}> extends Edge<AiringScheduleQuery, IAiringScheduleEdge> {
    public constructor() {
        super(new AiringScheduleQuery());
    }

    /** @deprecated Always returns null  */
    public withId(): AiringScheduleEdge<T & { id: Required<IAiringScheduleEdge>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }
}