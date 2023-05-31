import type { CharacterConnection } from "./character";
import type { StudioConnection } from "./studio";
import type { MediaConnection } from "./media";
import type { StaffConnection } from "./staff";

export interface Favourites {
    anime?: MediaConnection;
    manga?: MediaConnection;
    characters?: CharacterConnection;
    staff?: StaffConnection;
    studios?: StudioConnection;
}