import type { MediaConnection } from "../media";

export interface Studio {
    id?: number;
    name?: string;
    isAnimationStudio?: boolean;
    media?: MediaConnection | null;
    siteUrl?: string | null;
    isFavourite?: boolean;
    favourites?: number | null;
}