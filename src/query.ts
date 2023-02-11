import { AnilistError } from "./anilist-error";
import { Parser } from "./parser";
import { QueryType } from "./typings";

export abstract class Query<T, K> extends Parser {
    static url = "https://graphql.anilist.co";

    protected query: QueryType<T> = new Map()
    protected abstract type: string;

    protected abstract buildQuery(): string;

    public async fetch(raw?: boolean): Promise<any> {
        const res = await fetch(Query.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: this.buildQuery()
            })
        })
        const json = await res.json();

        if (!res.ok) throw new AnilistError(json);

        return raw ? <never>json : <never>json.data[this.type];
    }

    public arguments(args: K, override: boolean = false) {
        this.args = <never>(override ? args : { ...this.args, ...args });
        return this;
    }

    public get raw(): string {
        return this.buildQuery();
    }
}