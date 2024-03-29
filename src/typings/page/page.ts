import type { Character } from "../character";
import type { IPageInfo } from "../page-info";
import type { Media } from "../media";

export interface Page {
    pageInfo?: IPageInfo | null;

    /** Not yet implemented */
    users?: undefined;
    media?: Array<Media> | [];
    characters?: Array<Character> | [];

    /** Not yet implemented */
    staff?: undefined;

    /** Not yet implemented */
    studios?: undefined;

    /** Not yet implemented */
    mediaList?: undefined;

    /** Not yet implemented */
    airingSchedules?: undefined;

    /** Not yet implemented */
    mediaTrends?: undefined;

    /** Not yet implemented */
    notifications?: undefined;

    /** Not yet implemented */
    followers?: undefined;

    /** Not yet implemented */
    following?: undefined;

    /** Not yet implemented */
    activities?: undefined;

    /** Not yet implemented */
    activityReplies?: undefined;

    /** Not yet implemented */
    threads?: undefined;

    /** Not yet implemented */
    threadComments?: undefined;

    /** Not yet implemented */
    reviews?: undefined;

    /** Not yet implemented */
    recommendations?: undefined;

    /** Not yet implemented */
    likes?: undefined;
}