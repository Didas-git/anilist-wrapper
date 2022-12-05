import { AnilistErrorType } from "./typings";

export interface AnilistError {
    message: AnilistErrorType
}

export interface AnilistSubError {
    message: any
}

export class AnilistSubError extends Error { }

export class AnilistError extends AnilistSubError {
    constructor(message: AnilistErrorType) {
        super()

        this.message = message;
        this.name = "AnilistError"
    }
}