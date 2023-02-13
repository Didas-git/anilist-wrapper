import { CharacterQuery, MediaQuery, PageQuery, StudioQuery } from "./queries";
import { CharacterArguments, MediaArguments, PageArguments, StudioArguments } from "./typings";

export * from "./queries";
export * from "./typings";
export * from "./anilist-error";
export * from "./connection";

export class Anilist {
    public query = {
        media: this.mediaQuery,
        page: this.pageQuery,
        character: this.characterQuery,
        studio: this.studioQuery
    }
    // Sugar to avoid using `new` in the code
    public mediaQuery(search?: string): MediaQuery;
    public mediaQuery(args?: MediaArguments): MediaQuery;
    public mediaQuery(options?: string | MediaArguments): MediaQuery {
        return new MediaQuery(<never>options);
    }

    public pageQuery(page?: number): PageQuery
    public pageQuery(options?: PageArguments): PageQuery
    public pageQuery(options?: number | PageArguments): PageQuery {
        return new PageQuery(<never>options);
    }

    public characterQuery(id?: number): CharacterQuery
    public characterQuery(args?: CharacterArguments): CharacterQuery
    public characterQuery(params?: CharacterArguments | number): CharacterQuery {
        return new CharacterQuery(<never>params)
    }

    public studioQuery(id?: number): StudioQuery
    public studioQuery(args?: StudioArguments): StudioQuery
    public studioQuery(params?: StudioArguments | number): StudioQuery {
        return new StudioQuery(<never>params)
    }
}

export const anilist = new Anilist();