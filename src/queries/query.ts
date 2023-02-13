import { AnilistError } from "../anilist-error";
import { Parser } from "../parser";
import { QueryType } from "../typings";

export abstract class Query<T, K> extends Parser {
    private static url = "https://graphql.anilist.co";

    protected query: QueryType<T> = new Map();
    protected abstract type: string;

    protected buildQuery(): string {
        const { args, fields } = this.parse();
        return `query{${this.type}(${args}){${fields}}}`;
    }

    public async fetch(raw?: boolean): Promise<unknown> {
        const res = await fetch(Query.url, {
            method: "POST",
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "Content-Type": "application/json",
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "Accept": "application/json"
            },
            body: JSON.stringify({ query: this.buildQuery() })
        });
        const json = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (!res.ok) throw new AnilistError(json);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return raw ? json : json.data[this.type];
    }

    public arguments(args: K, override: boolean = false): this {
        this.args = <never>(override ? args : { ...this.args, ...args });
        return this;
    }

    public get raw(): string {
        return this.buildQuery();
    }
}