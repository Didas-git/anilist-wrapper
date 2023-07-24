/* eslint-disable @typescript-eslint/no-explicit-any */
import { Parser } from "../parser";

import type { IEdge, QueryType } from "../typings";
import type { Base } from "../base";

export class Edge<T extends Base<any, any>, K extends IEdge<any>> extends Parser {

    protected args = undefined;
    protected default: string = "id";
    protected query: QueryType<K> = new Map();

    public constructor(private readonly queryType: T) {
        super();
    }

    public withNode(node: Base<any, any> | ((node: T) => Base<any, any>)): any {
        const { args, fields } = typeof node === "function" ? node(this.queryType).parse() : node.parse();

        this.query.set("node", { args, fields: [fields] });
        return this;
    }
}