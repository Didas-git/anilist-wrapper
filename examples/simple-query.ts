import { anilist } from "../src";

const query = anilist.mediaQuery("Kamisama Ni Natta Hi").withId().withTitles().withGenres();

console.log(query.raw);
/*
query {
    Media(type: "ANIME", search: "Kamisama Ni Natta Hi") {
        id,
        title {
            romaji
        },
        genres
    }
}
*/

(async () => {
    const data = await query.fetch();

    console.log(data);
    /*
    {
        id: 118419,
        title: { romaji: 'Kamisama ni Natta Hi' },
        genres: [ 'Comedy', 'Drama', 'Romance', 'Sci-Fi', 'Slice of Life' ]
    }
    */
})()