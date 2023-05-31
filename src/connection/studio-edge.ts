import { StudioQuery } from "../queries";
import { Edge } from "./edge";

import type { ExtractStudio, IStudioEdge } from "../typings";

export interface StudioEdge<T> {
    withNode: <K extends StudioQuery>(node: K | ((node: StudioQuery) => K)) => StudioEdge<T & { node: ExtractStudio<K> }>;
}

export class StudioEdge<T = {}> extends Edge<StudioQuery, IStudioEdge> {
    public constructor() {
        super(new StudioQuery());
    }

    public withId(): StudioEdge<T & { id: Required<IStudioEdge>["id"] }> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public isMain(): StudioEdge<T & { isMain: Required<IStudioEdge>["isMain"] }> {
        this.query.set("isMain", void 0);
        return <never>this;
    }

    public withFavouriteOrder(): StudioEdge<T & { favouriteOrder: Required<IStudioEdge>["favouriteOrder"] }> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}