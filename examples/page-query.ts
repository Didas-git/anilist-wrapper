import { Anilist } from "../src";

const query = Anilist.query.page({ perPage: 1 }).withMedia(media => media.withTitles().withId().withDescription())

console.log(query.raw);
/*
query {
    Page(page: 1, perPage: 1) {
        media(type: ANIME) {   
            title {
                romaji
            },
            id,
            description
        }
    }
}
*/

(async () => {
    const data = await query.fetch();

    console.log(data)
    /*
    {
        media: [
            {
                title: { romaji: 'Cowboy Bebop' },
                id: 1,
                description: 'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\n' +
                    'While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?'
            }
        ]
    }
    */
})()