import type { Name } from "../name";

export interface CharacterName extends Name {
    alternativeSpoiler?: Array<string> | [];
}