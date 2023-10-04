import type { MediaListGroup } from "./media-list-group";
import type { User } from "../user";

export interface MediaListCollection {
    lists?: Array<MediaListGroup>;
    user?: User;
    hasNextChunk?: boolean;
}