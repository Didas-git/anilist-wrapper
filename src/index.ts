import { MediaQuery } from "./media-query";
import { PageQuery } from "./page-query";
import { MediaArguments, PageArguments } from "./typings";

export * from "./media-query";
export * from "./page-query";
export * from "./typings";
export * from "./anilist-error";
export * from "./connection";

export class Anilist {
    public query = {
        media: this.mediaQuery,
        page: this.pageQuery
    }
    // Sugar to avoid using `new` in the code
    public mediaQuery(search?: string): MediaQuery;
    public mediaQuery(args?: MediaArguments): MediaQuery;
    public mediaQuery(options?: string | MediaArguments): MediaQuery {
        return new MediaQuery(<never>options);
    }

    public pageQuery(page?: number): PageQuery
    public pageQuery(options?: PageArguments): PageQuery
    public pageQuery(options?: number | PageArguments): PageQuery {
        return new PageQuery(<never>options);
    }
}

export const anilist = new Anilist();