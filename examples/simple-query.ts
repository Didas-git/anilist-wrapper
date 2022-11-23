import { Anilist } from "../src";

const query = new Anilist.query("Kamisama Ni Natta Hi").withId().withTitles().withGenres();

console.log(query.raw);
/*
query {
    Media(type: "ANIME", search: "Kamisama Ni Natta Hi") {
        id,
        title {
            romaji,
            english,
            native
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
        title: {
            romaji: 'Kamisama ni Natta Hi',
            english: 'The Day I Became a God',
            native: '神様になった日'
        },
        genres: [ 'Comedy', 'Drama', 'Romance', 'Sci-Fi', 'Slice of Life' ]
    }
    */
})()