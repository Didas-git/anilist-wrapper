import { inspect } from "node:util";
import { FetchReturnType, Media, MediaArguments } from "./typings";

export class QueryMedia {
    #url = "https://graphql.anilist.co";
    #options: MediaArguments = {
        type: "ANIME"
    };

    #query: Array<keyof Media> = [];
    /**
     * @param media - Not Implemented yet
     */
    constructor(name: string, media?: MediaArguments)
    /**
     * @param media - Not Implemented yet
     */
    constructor(args: MediaArguments, media?: MediaArguments)
    /**
     * @param _media - Not Implemented yet
     */
    constructor(params: MediaArguments | string, _media?: MediaArguments) {
        if (typeof params === "string") this.#options = { ...this.#options, search: params };
        else this.#options = { ...this.#options, ...params };
    }

    #transformOptions() {
        return Object.keys(this.#options).map((key) => `${key}: ${this.#options[<keyof MediaArguments>key]!.toString().split(" ").length - 1 >= 1 ? JSON.stringify(this.#options[<keyof MediaArguments>key]) : this.#options[<keyof MediaArguments>key]}`).join(", ")
    }

    #buildQuery() {
        return `query {
    Media(${this.#transformOptions()}) {
        ${this.#query.join(",\n        ")}
    }
}
    `};

    async fetch<T extends boolean = false>(raw?: T): Promise<T extends true ? FetchReturnType : Media> {
        const res = await fetch(this.#url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: this.#buildQuery()
            })
        })
        if (!res.ok) throw new Error(inspect(await res.json(), false, null, true));

        const json: FetchReturnType = await res.json();

        return raw ? <never>json : <never>json.data.Media;
    }

    withId() {
        this.#query.push("id");
        return this;
    }

    withMalId() {
        this.#query.push("idMal");
        return this;
    }

    // TODO: Support complex search
    withTitles() {
        this.#query.push(<never>`title {
            romaji,
            english,
            native
        }`);

        return this;
    }

    withType() {
        this.#query.push("type");
        return this;
    }

    withFormat() {
        this.#query.push("format");
        return this;
    }

    withStatus() {
        this.#query.push("status");
        return this;
    }

    withDescription() {
        this.#query.push("description");
        return this;
    }

    withStartDate() {
        this.#query.push("startDate");
        return this;
    }

    withEndDate() {
        this.#query.push("endDate");
        return this;
    }

    withSeason() {
        this.#query.push("season");
        return this;
    }

    withSeasonYear() {
        this.#query.push("seasonYear");
        return this;
    }

    withSeasonInt() {
        this.#query.push("seasonInt");
        return this;
    }

    withEpisodes() {
        this.#query.push("episodes");
        return this;
    }

    withDuration() {
        this.#query.push("duration");
        return this;
    }

    withChapters() {
        this.#query.push("chapters");
        return this;
    }

    withVolumes() {
        this.#query.push("volumes");
        return this;
    }

    withCountryOfOrigin() {
        this.#query.push("countryOfOrigin");
        return this;
    }

    isLicensed() {
        this.#query.push("isLicensed");
        return this;
    }

    withSource() {
        this.#query.push("source");
        return this;
    }

    withTwitterHashtag() {
        this.#query.push("hashtag");
        return this;
    }

    // TODO: Support complex search
    withTrailer() {
        this.#query.push(<never>`trailer {
            id,
            site,
            thumbnail
        }`);
        return this;
    }

    updatedAt() {
        this.#query.push("updatedAt");
        return this;
    }

    // TODO: Support complex search
    withCoverImage() {
        this.#query.push(<never>`coverImage {
            extraLarge,
            color
        }`);
        return this;
    }

    withBannerImage() {
        this.#query.push("bannerImage");
        return this;
    }

    withGenres() {
        this.#query.push("genres");
        return this;
    }

    withSynonyms() {
        this.#query.push("synonyms");
        return this;
    }

    withAverageScore() {
        this.#query.push("averageScore");
        return this;
    }

    withMeanScore() {
        this.#query.push("meanScore");
        return this;
    }

    withPopularity() {
        this.#query.push("popularity");
        return this;
    }

    isLocked() {
        this.#query.push("isLocked");
        return this;
    }

    withTrending() {
        this.#query.push("trending");
        return this;
    }

    withFavourites() {
        this.#query.push("favourites");
        return this;
    }

    // TODO: Support complex search
    withTags() {
        this.#query.push(<never>`tags {
            id,
            name,
            description,
            category,
            rank,
            isGeneralSpoiler,
            isMediaSpoiler,
            isAdult,
            userId
        }`);
        return this;
    }

    // TODO: This is a complex field that i will support once i add that to every complex field
    // withRelations() {}

    // TODO: Support complex search
    // withCharacters() {}

    // TODO: Support complex search
    // withStaff() {}

    // TODO: Support complex search
    // withStudios() {}

    isFavourite() {
        this.#query.push("isFavourite");
        return this;
    }

    isFavouriteBlocked() {
        this.#query.push("isFavouriteBlocked");
        return this;
    }

    isAdult() {
        this.#query.push("isAdult");
        return this;
    }

    // TODO: Support complex search
    withNextAiringEpisode() {
        this.#query.push(<never>`nextAiringEpisode {
            id,
            airingAt,
            timeUntilAiring,
            episode,
            mediaId
        }`);
        return this;
    }

    // TODO: Support complex search
    // withAiringSchedule() {}

    // TODO: Support complex search
    // withTrends() {}

    // TODO: Support complex search
    withExternalLinks() {
        this.#query.push(<never>`externalLinks {
            id,
            url,
            site,
            siteId,
            type,
            language,
            color,
            icon,
            notes,
            isDisabled
        }`);
        return this;
    }

    // TODO: Support complex search
    withStreamingEpisodes() {
        this.#query.push(<never>`streamingEpisodes {
            title,
            thumbnail,
            url,
            site
        }`);
        return this;
    }

    // TODO: Support complex search
    withRankings() {
        this.#query.push(<never>`rankings {
            id,
            rank,
            type,
            format,
            year,
            season,
            allTime,
            context
        }`);
        return this;
    }

    // TODO: Support complex search
    // withMediaListEntries() {}

    // TODO: Support complex search
    // withReviews() {}

    // TODO: Support complex search
    withStats() {
        this.#query.push(<never>`stats {
            scoreDistribution {
                score,
                amount
            },
            statusDistribution {
                status,
                amount
            }
        }`);
        return this;
    }

    withSiteUrl() {
        this.#query.push("siteUrl");
        return this;
    }

    withAutoCreateForumThread() {
        this.#query.push("autoCreateForumThread");
        return this;
    }

    isRecommendationBlocked() {
        this.#query.push("isRecommendationBlocked");
        return this;
    }

    isReviewBlocked() {
        this.#query.push("isReviewBlocked");
        return this;
    }

    withModNotes() {
        this.#query.push("modNotes");
        return this;
    }

    get raw(): string {
        return this.#buildQuery();
    }
}