import {
    MediaListCollectionQuery,
    AiringScheduleQuery,
    MediaTrendQuery,
    CharacterQuery,
    MediaListQuery,
    StudioQuery,
    StaffQuery,
    MediaQuery,
    PageQuery
} from ".";

import type {
    MediaListCollectionArguments,
    AiringScheduleArguments,
    MediaTrendArguments,
    CharacterArguments,
    MediaListArguments,
    StudioArguments,
    MediaArguments,
    StaffArguments,
    PageArguments
} from "../typings";

export class Queries {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    #OAuthToken: string | undefined;

    public constructor(token: string | undefined) {
        this.#OAuthToken = token;
    }

    public page(page?: number, oAuthToken?: string): PageQuery;
    public page(params?: PageArguments, oAuthToken?: string): PageQuery;
    public page(params?: number | PageArguments, oAuthToken?: string): PageQuery {
        return new PageQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public media(search?: string, oAuthToken?: string): MediaQuery;
    public media(args?: MediaArguments, oAuthToken?: string): MediaQuery;
    public media(params?: string | MediaArguments, oAuthToken?: string): MediaQuery {
        return new MediaQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public mediaTrend(id?: number, oAuthToken?: string): MediaTrendQuery;
    public mediaTrend(args?: MediaTrendArguments, oAuthToken?: string): MediaTrendQuery;
    public mediaTrend(params?: MediaTrendArguments | number, oAuthToken?: string): MediaTrendQuery {
        return new MediaTrendQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public airingSchedule(id?: number, oAuthToken?: string): AiringScheduleQuery;
    public airingSchedule(args?: AiringScheduleArguments, oAuthToken?: string): AiringScheduleQuery;
    public airingSchedule(params?: AiringScheduleArguments | number, oAuthToken?: string): AiringScheduleQuery {
        return new AiringScheduleQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public character(id?: number, oAuthToken?: string): CharacterQuery;
    public character(args?: CharacterArguments, oAuthToken?: string): CharacterQuery;
    public character(params?: CharacterArguments | number, oAuthToken?: string): CharacterQuery {
        return new CharacterQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public staff(id?: number, oAuthToken?: string): StaffQuery;
    public staff(args?: StaffArguments, oAuthToken?: string): StaffQuery;
    public staff(params?: StaffArguments | number, oAuthToken?: string): StaffQuery {
        return new StaffQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public mediaList(id?: number, oAuthToken?: string): MediaListQuery;
    public mediaList(args?: MediaListArguments, oAuthToken?: string): MediaListQuery;
    public mediaList(params?: MediaListArguments | number, oAuthToken?: string): MediaListQuery {
        return new MediaListQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public mediaListCollection(name?: string, oAuthToken?: string): MediaListCollectionQuery;
    public mediaListCollection(args?: MediaListCollectionArguments, oAuthToken?: string): MediaListCollectionQuery;
    public mediaListCollection(params?: MediaListCollectionArguments | string, oAuthToken?: string): MediaListCollectionQuery {
        return new MediaListCollectionQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

    public studio(id?: number, oAuthToken?: string): StudioQuery;
    public studio(args?: StudioArguments, oAuthToken?: string): StudioQuery;
    public studio(params?: StudioArguments | number, oAuthToken?: string): StudioQuery {
        return new StudioQuery(<never>params, oAuthToken ?? this.#OAuthToken);
    }

}