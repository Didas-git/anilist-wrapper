export interface Name {
    first?: string | null;
    middle?: string | null;
    last?: string | null;
    full?: string | null;
    native?: string | null;
    alternative?: Array<string> | [];
    userPreferred?: string | null;
}