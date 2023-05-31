import type { Staff, StaffRoleType } from "../staff";
import type { Character, CharacterRole } from ".";
import type { Media } from "../media";
import type { IEdge } from "../edge";

export interface ICharacterEdge extends IEdge<Character> {
    id?: number | null;
    role?: CharacterRole | null;
    name?: string | null;
    voiceActors?: Array<Staff> | [];
    voiceActorRoles?: Array<StaffRoleType> | [];
    media?: Array<Media> | [];
    favouriteOrder?: number | null;
}