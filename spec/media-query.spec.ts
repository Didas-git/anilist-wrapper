import { describe, expect, test } from "vitest";
import { MediaQuery } from "../src";

describe("Media Query", () => {
    test("Default search value", () => {
        expect(new MediaQuery("Kamisama")["options"]).toStrictEqual({
            type: "ANIME",
            search: "Kamisama"
        })
    })
})