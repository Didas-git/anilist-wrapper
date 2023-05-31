import type { Character, CharacterRole } from "../character";
import type { Staff, StaffRoleType } from "../staff";
import type { Media, MediaRelation } from ".";
import type { IEdge } from "../edge";

export interface IMediaEdge extends IEdge<Media> {
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