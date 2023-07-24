/* eslint-disable @typescript-eslint/naming-convention */
import { Queries } from "./queries";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type {
    AccessTokenError,
    AccessTokenInfo,
    ClientOptions,
    OAuthFields
} from "./typings";

export class Client {
    #options: ClientOptions;
    #queries: Queries;

    public constructor(options?: ClientOptions) {
        this.#options = options ?? <ClientOptions>{};
        this.#queries = new Queries(this.#options.OAuthToken);
    }

    public createOAuthURI(options?: OAuthFields): string {
        options = { ...this.#options.OAuth, ...options };

        const url = new URL("https://anilist.co/api/v2/oauth/authorize");

        if (typeof options.clientId === "undefined" || typeof options.responseType === "undefined") {
            throw new Error();
        }

        url.searchParams.set("client_id", options.clientId.toString());

        if (typeof options.redirectUri !== "undefined") {
            url.searchParams.set("redirect_uri", options.redirectUri);
        }

        url.searchParams.set("response_type", options.responseType);

        return url.toString();
    }

    public async getAccessToken(authCode: string, options?: OAuthFields): Promise<AccessTokenInfo | AccessTokenError> {
        options = { ...this.#options.OAuth, ...options };

        const res = await fetch("https://anilist.co/api/v2/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "grant_type": "authorization_code",
                "client_id": options.clientId,
                "client_secret": options.clientSecret,
                "redirect_uri": options.redirectUri,
                "code": authCode
            })
        });

        return <AccessTokenInfo | AccessTokenError>await res.json();
    }

    public get query(): Queries {
        return this.#queries;
    }
}
