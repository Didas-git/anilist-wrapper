import { CharacterConnection } from "./character";
import { MediaConnection } from "./media";
import { StaffConnection } from "./staff";
import { StudioConnection } from "./studio";

export interface Favourites {
    anime?: MediaConnection;
    manga?: MediaConnection;
    characters?: CharacterConnection;
    staff?: StaffConnection;
    studios?: StudioConnection;
}