import { PageInfo } from "./page-info";

export interface Connection<Edge, Node> {
    edges?: Array<Edge> | [];
    nodes?: Array<Node> | [];
    pageInfo?: PageInfo | null;
}