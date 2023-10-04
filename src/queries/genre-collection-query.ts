import { Base } from "../base";

export interface GenreCollectionQuery {
    fetch: ((raw?: false) => Promise<Array<string>>) & ((raw?: true) => Promise<{ data: { GenreCollection: Array<string> } }>);
}

export class GenreCollectionQuery extends Base<never, never> {
    protected override default: string = "";
    protected override type: string = "GenreCollection";
    protected override args: Record<PropertyKey, any> | undefined;
    protected override queryOrMutation: "query" | "mutation" = "query";

    public constructor(oAuthToken?: string) {
        super(oAuthToken);
    }
}