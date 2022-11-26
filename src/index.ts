import { QueryMedia } from "./media-query";
import { MediaArguments } from "./typings";

export * from "./media-query";
export * from "./typings";

export const Anilist = {
    query: {
        media: mediaQuery
    },
    mediaQuery
}

function mediaQuery(search: string): QueryMedia;
function mediaQuery(args: MediaArguments): QueryMedia;
function mediaQuery(options: string | MediaArguments): QueryMedia {
    return new QueryMedia(<never>options)
}