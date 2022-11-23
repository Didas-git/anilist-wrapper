import { Character, CharacterRole } from ".";
import { Edge } from "../edge";
import { Media } from "../media";
import { Staff, StaffRoleType } from "../staff";

export interface CharacterEdge extends Edge<Character> {
    id?: number | null;
    role?: CharacterRole | null;
    name?: string | null;
    voiceActors?: Array<Staff> | [];
    voiceActorRoles?: Array<StaffRoleType> | [];
    media?: Array<Media> | [];
    favouriteOrder?: number | null;
}