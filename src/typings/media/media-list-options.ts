import { MediaListTypeOptions } from ".";
import { ScoreFormat } from "../score";

export interface MediaListOptions {
    scoreFormat?: ScoreFormat | null;
    rowOrder?: string | null;
    animeList?: MediaListTypeOptions | null;
    mangaList?: MediaListTypeOptions | null;
}