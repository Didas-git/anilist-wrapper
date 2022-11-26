import { QueryMedia } from "./media-query";
import { MediaArgs, MediaArguments } from "./typings";

export * from "./media-query";
export * from "./typings";

export const Anilist = {
    query: {
        media: mediaQuery
    },
    mediaQuery
}

// Sugar to avoid using `new` in the code
function mediaQuery(search: string, media?: Array<MediaArgs>): QueryMedia;
function mediaQuery(args: MediaArguments, media?: Array<MediaArgs>): QueryMedia;
function mediaQuery(options: string | MediaArguments, media?: Array<MediaArgs>): QueryMedia {
    return new QueryMedia(<never>options, media)
}