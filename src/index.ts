import { CharacterQuery, MediaQuery, PageQuery, StudioQuery } from "./queries";

import type { CharacterArguments, MediaArguments, PageArguments, StudioArguments } from "./typings";

export * from "./queries";
export * from "./anilist-error";
export * from "./connection";

export type * from "./typings";

export class Anilist {
    public query = {
        media: this.mediaQuery,
        page: this.pageQuery,
        character: this.characterQuery,
        studio: this.studioQuery
    };

    // Sugar to avoid using `new` in the code
    public mediaQuery(this: void, search?: string): MediaQuery;
    public mediaQuery(this: void, args?: MediaArguments): MediaQuery;
    public mediaQuery(this: void, options?: string | MediaArguments): MediaQuery {
        return new MediaQuery(<never>options);
    }

    public pageQuery(this: void, page?: number): PageQuery;
    public pageQuery(this: void, options?: PageArguments): PageQuery;
    public pageQuery(this: void, options?: number | PageArguments): PageQuery {
        return new PageQuery(<never>options);
    }

    public characterQuery(this: void, id?: number): CharacterQuery;
    public characterQuery(this: void, args?: CharacterArguments): CharacterQuery;
    public characterQuery(this: void, params?: CharacterArguments | number): CharacterQuery {
        return new CharacterQuery(<never>params);
    }

    public studioQuery(this: void, id?: number): StudioQuery;
    public studioQuery(this: void, args?: StudioArguments): StudioQuery;
    public studioQuery(this: void, params?: StudioArguments | number): StudioQuery {
        return new StudioQuery(<never>params);
    }
}

export const anilist = new Anilist();