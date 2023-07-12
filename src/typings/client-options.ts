export interface ClientOptions {
    OAuth?: OAuthFields;
    OAuthToken?: string;
    autoSaveOAuth?: boolean;
}

export interface OAuthFields {
    clientId?: string | number;
    clientSecret?: string;
    redirectUri?: string;
    responseType?: "token" | "code";
}