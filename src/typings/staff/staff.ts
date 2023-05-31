import type { CharacterConnection } from "../character";
import type { MediaConnection } from "../media";
import type { StaffImage, StaffName } from ".";
import type { FuzzyDate } from "../fuzzy-date";
import type { User } from "../user";

export interface Staff {
    id?: number;
    name?: StaffName | null;
    languageV2?: string | null;
    image?: StaffImage | null;
    description?: string | null;
    primaryOccupations?: Array<string> | [];
    gender?: string | null;
    dateOfBirth?: FuzzyDate | null;
    dateOfDeath?: FuzzyDate | null;
    age?: number | null;
    yearsActive?: Array<number> | [];
    homeTown?: string | null;
    bloodType?: string | null;
    isFavourite?: boolean;
    isFavouriteBlocked?: boolean;
    siteUrl?: string | null;
    staffMedia?: MediaConnection | null;
    characters?: CharacterConnection | null;
    characterMedia?: MediaConnection | null;
    staff?: Staff | null;
    submitter?: User | null;
    submissionStatus?: number | null;
    submissionNotes?: string | null;
    favourites?: number | null;
    modNotes?: string | null;
}