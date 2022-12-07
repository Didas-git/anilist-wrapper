import { EnumTypes, QueryType } from "./typings"

export abstract class Parser {
    protected abstract query: QueryType<any>;
    protected abstract default: string;
    protected abstract args: Record<PropertyKey, any> | undefined;

    public parse() {
        const arr: Array<string> = [];

        this.query.forEach((val, key) => {
            if (typeof val === "undefined") {
                return arr.push(<string>key);
            } else if (Array.isArray(val)) {
                return arr.push(this.#parseFieldArray(<string>key, val));
            }

            if (typeof val.args === "undefined" && typeof val.fields === "undefined") return arr.push(<string>key);
            if (typeof val.fields === "undefined" && val.args) {
                if (typeof val.args === "string") return arr.push(this.#parseSimpleArgs(<string>key, val.args))
                return arr.push(this.#parseComplexArgs(<string>key, val.args));
            }

            return arr.push(this.#parseFieldArray(typeof val.args === "string" ? this.#parseSimpleArgs(<string>key, val.args!) : this.#parseComplexArgs(<string>key, val.args!), val.fields!));
        })

        return {
            args: this.#parseArgs(),
            fields: arr.join(",\n") || this.default
        }
    }

    #parseArgs() {
        return this.args && Object.entries(this.args).map(([key, val]) => `${key}: ${EnumTypes.has(key) ? val : Array.isArray(val) ? `[${val}]` : JSON.stringify(val)}`).join(", ");
    }

    #parseFieldArray(key: string, fields: Array<string>): string {
        return `${key} {
            ${fields.join(",\n")}
        }`
    }

    #parseSimpleArgs(key: string, args: string): string {
        return `${key}(${args})`
    }

    #parseComplexArgs(key: string, args: Record<string, unknown>): string {
        const arr: Array<string> = Object.entries(args).map(([k, val]) => {
            if (Array.isArray(val)) {
                return `${k}: [${val.join(", ")}]`
            } else if (typeof val === "boolean") {
                return `${k}: ${`${val}`}`
            } else if (typeof val === "number") {
                return `${k}: ${val.toString()}`
            }

            throw new Error("Something went wrong parsing the value")
        })

        return `${key} (${arr.join(", ")})`
    }
}