/* eslint-disable @typescript-eslint/naming-convention */
import { createServer } from "node:http";
import {
    CharacterQuery,
    StudioQuery,
    StaffQuery,
    MediaQuery,
    PageQuery
} from "./queries";

import type {
    CharacterArguments,
    AccessTokenError,
    AccessTokenInfo,
    StudioArguments,
    MediaArguments,
    StaffArguments,
    PageArguments,
    ClientOptions,
    OAuthFields
} from "./typings";

export class Client {
    #options: ClientOptions;

    public constructor(options?: ClientOptions) {
        this.#options = options ?? <ClientOptions>{};
    }

    public pageQuery(page?: number, oAuthToken?: string): PageQuery;
    public pageQuery(params?: PageArguments, oAuthToken?: string): PageQuery;
    public pageQuery(params?: number | PageArguments, oAuthToken?: string): PageQuery {
        return new PageQuery(<never>params, oAuthToken ?? this.#options.OAuthToken);
    }

    public mediaQuery(search?: string, oAuthToken?: string): MediaQuery;
    public mediaQuery(args?: MediaArguments, oAuthToken?: string): MediaQuery;
    public mediaQuery(params?: string | MediaArguments, oAuthToken?: string): MediaQuery {
        return new MediaQuery(<never>params, oAuthToken ?? this.#options.OAuthToken);
    }

    public characterQuery(id?: number, oAuthToken?: string): CharacterQuery;
    public characterQuery(args?: CharacterArguments, oAuthToken?: string): CharacterQuery;
    public characterQuery(params?: CharacterArguments | number, oAuthToken?: string): CharacterQuery {
        return new CharacterQuery(<never>params, oAuthToken ?? this.#options.OAuthToken);
    }

    public studioQuery(id?: number, oAuthToken?: string): StudioQuery;
    public studioQuery(args?: StudioArguments, oAuthToken?: string): StudioQuery;
    public studioQuery(params?: StudioArguments | number, oAuthToken?: string): StudioQuery {
        return new StudioQuery(<never>params, oAuthToken ?? this.#options.OAuthToken);
    }

    public staffQuery(id?: number, oAuthToken?: string): StaffQuery;
    public staffQuery(args?: StaffArguments, oAuthToken?: string): StaffQuery;
    public staffQuery(params?: StaffArguments | number, oAuthToken?: string): StaffQuery {
        return new StaffQuery(<never>params, oAuthToken ?? this.#options.OAuthToken);
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

    /** Be aware that the user still needs to click on the provided url */
    public async handleOnServer(): Promise<string> {
        return new Promise((resolve, reject) => {
            const server = createServer((req, res) => {
                const code = new URL(req.url ?? "", this.#options.OAuth?.redirectUri).searchParams.get("code");

                res.end();
                server.close();

                if (code === null) reject("Something went wrong");
                resolve(<string>code);
            }).listen(3000);
        });
    }
}
