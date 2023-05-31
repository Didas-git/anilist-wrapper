import type { Image } from "../image";

export interface MediaCoverImage extends Image {
    extraLarge?: string | null;
    color?: string | null;
}