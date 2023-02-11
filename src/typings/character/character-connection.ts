import { Connection } from "../connection";
import { Character, ICharacterEdge } from ".";

export interface CharacterConnection extends Connection<ICharacterEdge, Character> { }