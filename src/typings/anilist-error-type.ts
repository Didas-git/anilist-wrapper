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