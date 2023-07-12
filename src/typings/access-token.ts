export interface AccessTokenInfo {
    token_type: "Bearer";
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

export interface AccessTokenError {
    error: string;
    message: string;
    hint: string;
}