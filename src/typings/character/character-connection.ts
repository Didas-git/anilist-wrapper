import type { Character, ICharacterEdge } from ".";
import type { Connection } from "../connection";

export interface CharacterConnection extends Connection<ICharacterEdge, Character> { }