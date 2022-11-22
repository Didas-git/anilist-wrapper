import { StaffImage, StaffName } from ".";
import { CharacterConnection } from "../character";
import { FuzzyDate } from "../fuzzy-date";
import { MediaConnection } from "../media";
import { User } from "../user";

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