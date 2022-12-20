import { anilist } from "../src";

const query = anilist.mediaQuery({ search: "Kamisama Ni Natta Hi" });

console.log(query.raw);
/*
query {
    Media(type: ANIME, search: "Kamisama Ni Natta Hi") {
        id,
        format,
        status
    }
}
*/

(async () => {
    const data = await query.fetch(true);

    console.log(data);
    /*
    {
        data: {
            Media: {
                id: 118419,
                format: 'TV',
                status: 'FINISHED'
            }
        }
    }
    */
})()