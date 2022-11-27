import { MediaQuery } from "./media-query";
import { PageQuery } from "./page-query";
import { MediaArgs, MediaArguments, PageArguments } from "./typings";

export * from "./media-query";
export * from "./page-query";
export * from "./typings";

export const Anilist = {
    query: {
        media: mediaQuery,
        page: pageQuery
    },
    mediaQuery,
    pageQuery
}

// Sugar to avoid using `new` in the code
function mediaQuery(search?: string, media?: Array<MediaArgs>): MediaQuery;
function mediaQuery(args?: MediaArguments, media?: Array<MediaArgs>): MediaQuery;
function mediaQuery(options?: string | MediaArguments, media?: Array<MediaArgs>): MediaQuery {
    return new MediaQuery(<never>options, media);
}

function pageQuery(page?: number): PageQuery
function pageQuery(options?: PageArguments): PageQuery
function pageQuery(options?: number | PageArguments): PageQuery {
    return new PageQuery(<never>options);
}