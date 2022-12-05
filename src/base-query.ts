import { inspect } from "node:util";
import { EnumTypes } from "./typings";

export abstract class Query {
    static url = "https://graphql.anilist.co";

    protected abstract options: Record<PropertyKey, any>;
    protected abstract query: Set<any>;
    protected abstract preQuery: Map<any, any>;
    protected abstract default: string;
    protected abstract type: string;

    protected transformOptions() {
        return Object.keys(this.options).map((key) => `${key}: ${EnumTypes.has(key) ? this.options[key] : Array.isArray(this.options[key]) ? `[${this.options[key]}]` : JSON.stringify(this.options[key])}`).join(", ")
    }

    protected preBuild() {
        this.preQuery.forEach(val => this.query.add(<never>val));
        return {
            options: this.transformOptions(),
            returns: Array.from(this.query).join(",\n") || this.default
        }
    }

    protected abstract buildQuery(): string;

    async fetch(raw?: boolean): Promise<any> {
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
        if (!res.ok) throw new Error(inspect(await res.json(), false, null, true));

        const json = await res.json();

        return raw ? <never>json : <never>json.data[this.type];
    }

    get raw(): string {
        return this.buildQuery();
    }
}