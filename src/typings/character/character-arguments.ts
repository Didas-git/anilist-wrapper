import { CharacterSort } from "./character-sort";

export interface CharacterArguments {
    id?: number;
    isBirthday?: boolean;
    search?: string;
    id_not?: number;
    id_in?: Array<number>;
    id_not_in?: Array<number>;
    sort?: Array<CharacterSort>
}