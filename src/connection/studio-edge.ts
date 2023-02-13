import { StudioQuery } from "../queries";
import { AddStudioEdge, ExtractStudio, IStudioEdge } from "../typings";
import { Edge } from "./edge";

export interface StudioEdge<T> {
    withNode<K extends StudioQuery>(node: K | ((node: StudioQuery) => K)): StudioEdge<T & { node: ExtractStudio<K> }>
}

export class StudioEdge<T = {}> extends Edge<StudioQuery, IStudioEdge> {
    constructor() {
        super(new StudioQuery())
    }

    public withId(): StudioEdge<AddStudioEdge<T, "id">> {
        this.query.set("id", void 0);
        return <never>this;
    }

    public isMain(): StudioEdge<AddStudioEdge<T, "isMain">> {
        this.query.set("isMain", void 0);
        return <never>this;
    }

    public withFavouriteOrder(): StudioEdge<AddStudioEdge<T, "favouriteOrder">> {
        this.query.set("favouriteOrder", void 0);
        return <never>this;
    }
}