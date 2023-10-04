import { anilist } from "../src";

const query = anilist.query.media()
    .withId()
    .withMalId()
    .withTitles()
    .withType()
    .withFormat()
    .withStatus()
    .withDescription()
    .withStartDate()
    .withEndDate()
    .withSeason()
    .withSeasonYear()
    .withSeasonInt()
    .withEpisodes()
    .withDuration()
    .withChapters()
    .withVolumes()
    .withCountryOfOrigin()
    .isLicensed()
    .withSource()
    .withTwitterHashtag()
    .withTrailer()
    .updatedAt()
    .withCoverImage()
    .withBannerImage()
    .withGenres()
    .withSynonyms()
    .withAverageScore()
    .withMeanScore()
    .withPopularity()
    .isLocked()
    .withTrending()
    .withFavourites()
    .withTags()
    .withRelations({
        edges: (e) => e.withNode((n) => n.withId()),
        nodes: (n) => n.withId(),
        pageInfo: (p) => p.withTotal()
    })
    .withCharacters({
        edges: (e) => e.withNode((n) => n.withId()),
        nodes: (n) => n.withId(),
        pageInfo: (p) => p.withTotal()
    })
    .withStaff({
        edges: (e) => e.withNode((n) => n.withId()),
        nodes: (n) => n.withId(),
        pageInfo: (p) => p.withTotal()
    })
    .withStudios({
        edges: (e) => e.withNode((n) => n.withId()),
        nodes: (n) => n.withId(),
        pageInfo: (p) => p.withTotal()
    })
    .isFavourite()
    .isFavouriteBlocked()
    .isAdult()
    .withNextAiringEpisode()
    .withExternalLinks()
    .withStreamingEpisodes()
    .withRankings()
    .withMediaListEntries();
(async () => {
    console.log(await query.fetch())
})()