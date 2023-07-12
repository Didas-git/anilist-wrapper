import { AnilistError } from "../anilist-error";
import { Parser } from "../parser";

import type { QueryType } from "../typings";

export abstract class Query<T, K> extends Parser {
    private static url = "https://graphql.anilist.co";

    protected query: QueryType<T> = new Map();
    protected abstract type: string;

    /** @internal */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected OAuthToken?: string;

    protected constructor(token?: string) {
        super();

        this.OAuthToken = token;
    }

    protected buildQuery(): string {
        const { args, fields } = this.parse();
        return `query{${this.type}(${args}){${fields}}}`;
    }

    public async fetch(raw?: boolean): Promise<unknown> {

        const headers: HeadersInit = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Content-Type": "application/json",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Accept": "application/json"
        };

        if (typeof this.OAuthToken !== "undefined") headers.Authorization = `Bearer ${this.OAuthToken}`;

        const res = await fetch(Query.url, {
            method: "POST",
            body: JSON.stringify({ query: this.buildQuery() }),
            headers
        });
        const json = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        if (!res.ok) throw new AnilistError(json);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return raw ? json : json.data[this.type];
    }

    public arguments(args: K, token: string, override: boolean = false): this {
        this.args = <never>(override ? args : { ...this.args, ...args });
        this.OAuthToken = token;
        return this;
    }

    public get raw(): string {
        return this.buildQuery();
    }
}