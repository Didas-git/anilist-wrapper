import { inspect } from "node:util";
import { Complex, ComplexTypes, EnumTypes, InternalConnection } from "./typings";

export abstract class Query<T> {
    static url = "https://graphql.anilist.co";

    protected abstract options: Record<PropertyKey, any>;
    protected query = new Map<keyof T, undefined | Array<string> | Complex | InternalConnection | InternalConnection & Complex>()
    protected abstract default: string;
    protected abstract type: string;

    protected transformOptions() {
        return Object.keys(this.options).map((key) => `${key}: ${EnumTypes.has(key) ? this.options[key] : Array.isArray(this.options[key]) ? `[${this.options[key]}]` : JSON.stringify(this.options[key])}`).join(", ")
    }

    protected createQueryOptions(ops?: Array<any>) {
        if (!ops || !ops.length) return;

        // Casting to never in case someone who uses js tries to use one of the complex types (support in the future)
        for (let i = 0; i < ops.length; i++) {
            if (ComplexTypes.has(<never>ops[i])) throw new Error(`'${ops[i]}' cannot be passed to the constructor, use the builder method instead`);
            this.query.set(ops[i], void 0);
        }
    }

    protected preBuild() {
        const arr: Array<string> = [];

        this.query.forEach((val, key) => {
            if (typeof val === "undefined") {
                return arr.push(<string>key);
            } else if (Array.isArray(val)) {
                return arr.push(this.#parseFieldArray(<string>key, val));
            } else if (this.#isComplex(val) && this.#isConnection(val)) {

            } else if (this.#isConnection(val)) {
                return arr.push(this.#parseFieldArray(<string>key, this.#parseConnection(val)))
            } else {
                if (typeof val.args === "undefined" && typeof val.fields === "undefined") return arr.push(<string>key);
                if (typeof val.fields === "undefined") {
                    return arr.push(this.#parseComplexField(<string>key, val.args));
                }

                return arr.push(this.#parseFieldArray(this.#parseComplexField(<string>key, val.args), val.fields))
            }
        })

        return {
            options: this.transformOptions(),
            fields: arr.join(",\n") || this.default
        }
    }

    #isConnection(val: any): val is InternalConnection {
        if (("edges" in val) || ("nodes" in val) || ("pageInfo" in val)) return true;
        return false;
    }

    #isComplex(val: any): val is Complex {
        if (("args" in val) || ("fields" in val)) return true;
        return false
    }

    #parseConnection(val: InternalConnection): Array<string> {
        const arr: Array<string> = []
        Object.keys(val).forEach((k) => arr.push(this.#parseFieldArray(k, val[<never>k])))

        return arr;
    }

    #parseFieldArray(key: string, fields: Array<string>): string {
        return `${key} {
            ${fields.join(",\n")}
        }`
    }

    #parseComplexField(key: string, args: Record<string, unknown>): string {

        // return `${key}(${args.join(", ")})`
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