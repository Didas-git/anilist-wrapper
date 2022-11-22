export interface MediaTag {
    id?: number;
    name?: string;
    description?: string | null;
    category?: string | null;
    rank?: number | null;
    isGeneralSpoiler?: boolean | null;
    isMediaSpoiler?: boolean | null;
    isAdult?: boolean | null;
    userId?: number | null;
}