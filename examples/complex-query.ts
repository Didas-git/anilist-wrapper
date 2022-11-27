import { Anilist } from "../src";

const query = Anilist.query.media()
    .withSiteUrl()
    .withTitles("romaji", "english", "native")
    .withDescription()
    .withStatus()
    .withFormat()
    .withGenres()
    .withStartDate()
    .withEndDate()
    .withEpisodes()
    .withDuration()
    .withAverageScore()
    .withRankings("rank", "allTime")
    .withCoverImage("color", "extraLarge");

(async () => {
    console.log(await query.fetch(true))
})()