import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            reporter: ["text", "html"],
            exclude: [
                "spec/*",
                "src/typings/*"
            ]
        }
    }
})