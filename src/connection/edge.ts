import { Parser } from "../parser";
import { Query } from "../query";
import { IEdge, QueryType } from "../typings";

export class Edge<T extends Query<any, any>, K extends IEdge<any>> extends Parser {

    protected query: QueryType<K> = new Map();
    protected args = undefined;
    protected default: string = `id`;

    public constructor(private readonly queryType: T) {
        super()
    }

    public withNode(node: Query<any, any> | ((node: T) => Query<any, any>)): any {
        const { args, fields } = typeof node === "function" ? node(this.queryType).parse() : node.parse() ?? this.queryType.parse();

        this.query.set("node", { args, fields: [fields] })
        return this;
    }
}