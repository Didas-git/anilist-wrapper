import { StaffQuery } from "../queries";
import { Edge } from "./edge";

import type { ExtractStaff, IStaffEdge } from "../typings";

export interface StaffEdge<T> {
    withNode: <K extends StaffQuery>(node: K | ((node: StaffQuery) => K)) => StaffEdge<T & { node: ExtractStaff<K> }>;
}

export class StaffEdge<T = {}> extends Edge<StaffQuery, IStaffEdge> {
    public constructor() {
        super(new StaffQuery());
    }

    public withId(): StaffEdge<T & { id: Required<IStaffEdge>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public withRole(): StaffEdge<T & { role: Required<IStaffEdge>["role"] }> {
        this.query.set("role", void 0);
        return <never>this;
    }

    public withFavouriteOrder(): StaffEdge<T & { favouriteOrder: Required<IStaffEdge>["favouriteOrder"] }> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}