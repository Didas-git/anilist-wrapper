export interface AnilistErrorType {
    errors: Array<{
        message: string,
        status: number,
        locations: Array<{
            line: number,
            column: number
        }>
    }>
}

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