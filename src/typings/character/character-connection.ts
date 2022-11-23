import { Connection } from "../connection";
import { Character, CharacterEdge } from ".";

export interface CharacterConnection extends Connection<CharacterEdge, Character> { }