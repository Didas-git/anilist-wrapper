import { anilist } from "../src";

const media = anilist.query.media().withTitles();
const page = anilist.query.page({ perPage: 1 }).withMedia(media);

(async () => {
    media.arguments({
        search: "Kamisama Ni Natta"
    });

    page.withMedia(media);

    await page.fetch()
})()