import { Edge } from "../edge";
import { Media, MediaRelation } from ".";
import { Character, CharacterRole } from "../character";
import { Staff, StaffRoleType } from "../staff";

export interface MediaEdge extends Edge<Media> {
    id?: number | null;
    relationType?: MediaRelation | null;
    isMainStudio?: boolean;
    characters?: Array<Character> | [];
    characterRole?: CharacterRole | null;
    characterName?: string | null;
    roleNotes?: string | null;
    dubGroup?: string | null;
    staffRole?: string | null;
    voiceActors?: Array<Staff> | [];
    voiceActorRoles?: Array<StaffRoleType> | [];
    favouriteOrder?: number | null;
}