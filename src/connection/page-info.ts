import { Parser } from "../parser";
import { IPageInfo, QueryType } from "../typings";

export class PageInfo<T = {}> extends Parser {
    protected query: QueryType<IPageInfo> = new Map();
    protected args = undefined;
    protected default: string = "total";

    public withTotal(): PageInfo<T & { total: Required<IPageInfo>["total"] }> {
        this.query.set("total", void 0);
        return <never>this;
    }

    public withPerPage(): PageInfo<T & { perPage: Required<IPageInfo>["perPage"] }> {
        this.query.set("perPage", void 0);
        return <never>this;
    }

    public withCurrentPage(): PageInfo<T & { currentPage: Required<IPageInfo>["currentPage"] }> {
        this.query.set("currentPage", void 0);
        return <never>this;
    }

    public withLastPage(): PageInfo<T & { lastPage: Required<IPageInfo>["lastPage"] }> {
        this.query.set("lastPage", void 0);
        return <never>this;
    }

    public hasNextPage(): PageInfo<T & { hasNextPage: Required<IPageInfo>["hasNextPage"] }> {
        this.query.set("hasNextPage", void 0);
        return <never>this;
    }
}