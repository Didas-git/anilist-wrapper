import { Character } from "../character";

export type AddCharacter<T, P extends keyof Character> = T extends never ? never : T & { [K in P]: Required<Character>[K] };