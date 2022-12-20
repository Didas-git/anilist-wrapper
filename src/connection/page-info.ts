import { Parser } from "../parser";
import { AddPageInfo, IPageInfo, QueryType } from "../typings";

export class PageInfo<T = {}> extends Parser {
    protected query: QueryType<IPageInfo> = new Map();
    protected args = undefined;
    protected default: string = `total`;

    public withTotal(): PageInfo<AddPageInfo<T, "total">> {
        this.query.set("total", void 0);
        return <never>this;
    }

    public withPerPage(): PageInfo<AddPageInfo<T, "perPage">> {
        this.query.set("perPage", void 0);
        return <never>this;
    }

    public withCurrentPage(): PageInfo<AddPageInfo<T, "currentPage">> {
        this.query.set("currentPage", void 0);
        return <never>this;
    }

    public withLastPage(): PageInfo<AddPageInfo<T, "lastPage">> {
        this.query.set("lastPage", void 0);
        return <never>this;
    }

    public hasNextPage(): PageInfo<AddPageInfo<T, "hasNextPage">> {
        this.query.set("hasNextPage", void 0);
        return <never>this;
    }
}