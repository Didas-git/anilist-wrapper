import { Anilist } from "../src";

const media = Anilist.query.media().withTitles();
const page = Anilist.query.page({ perPage: 1 }).withMedia(media);

(async () => {
    media.arguments({
        search: "Kamisama Ni Natta"
    });

    page.withMedia(media);

    await page.fetch()
})()