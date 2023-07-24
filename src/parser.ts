/* eslint-disable @typescript-eslint/no-explicit-any */
import type { QueryType } from "./typings";

interface ParseReturn {
    args: string | undefined;
    fields: string;
}

export const EnumTypes = new Set(["season", "type", "format", "status", "source", "format_not", "status_not"]);

export abstract class Parser {
    protected abstract query: QueryType<any>;
    protected abstract default: string;
    protected abstract args: Record<PropertyKey, any> | undefined;

    /**
     * @internal
     */
    public parse(): ParseReturn {
        const arr: Array<string> = [];

        this.query.forEach((val, key) => {
            if (typeof val === "undefined") {
                return arr.push(<string>key);
            }

            if (Array.isArray(val)) {
                return arr.push(this.#parseFieldArray(<string>key, val));
            }

            if (typeof val.args === "undefined" && typeof val.fields === "undefined") {
                return arr.push(<string>key);
            }
            if (typeof val.fields === "undefined" && typeof val.args !== "undefined") {
                if (typeof val.args === "string") {
                    return arr.push(this.#parseSimpleArgs(<string>key, val.args));
                }
                return arr.push(this.#parseComplexArgs(<string>key, val.args));
            }

            if (typeof val.fields !== "undefined" && typeof val.args === "undefined") {
                return arr.push(this.#parseFieldArray(<string>key, val.fields));
            }

            return arr.push(this.#parseFieldArray(typeof val.args === "string"
                ? this.#parseSimpleArgs(<string>key, val.args)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                : this.#parseComplexArgs(<string>key, val.args!), val.fields!));
        });

        return {
            args: this.#parseArgs(),
            fields: arr.join(",\n") || this.default
        };
    }

    #parseArgs(): string | undefined {
        return this.args && Object.entries(this.args).map(([key, val]) => `${key}: ${EnumTypes.has(key) ? val : Array.isArray(val) ? `[${val}]` : JSON.stringify(val)}`).join(", ");
    }

    #parseFieldArray(key: string, fields: Array<string>): string {
        return `${key} {
            ${fields.join(",\n")}
        }`;
    }

    #parseSimpleArgs(key: string, args: string): string {
        return args.length ? `${key}(${args})` : `${key}`;
    }

    #parseComplexArgs(key: string, args: Record<string, unknown>): string {
        const arr: Array<string> = Object.entries(args).map(([k, val]) => {
            if (Array.isArray(val)) {
                return `${k}: [${val.join(", ")}]`;
            } else if (typeof val === "boolean") {
                return `${k}: ${`${val}`}`;
            } else if (typeof val === "number") {
                return `${k}: ${val.toString()}`;
            }

            throw new Error("Something went wrong parsing the value");
        });

        return `${key} (${arr.join(", ")})`;
    }
}