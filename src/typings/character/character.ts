import type { CharacterImage, CharacterName } from ".";
import type { MediaConnection } from "../media";
import type { FuzzyDate } from "../fuzzy-date";

export interface Character {
    id?: number;
    name?: CharacterName | null;
    image?: CharacterImage | null;
    description?: string | null;
    gender?: string | null;
    dateOfBirth?: FuzzyDate;
    age?: string | null;
    bloodType?: string | null;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    siteUrl?: string | null;
    media?: MediaConnection | null;
    favourites?: number | null;
    modNotes?: string | null;
}