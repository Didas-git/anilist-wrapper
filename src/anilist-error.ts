import type { AnilistErrorType } from "./typings";

export class AnilistError extends Error {
    public errors: AnilistErrorType["errors"];

    public constructor(message: AnilistErrorType) {
        super();

        this.errors = message.errors;
        this.name = "AnilistError";
    }
}