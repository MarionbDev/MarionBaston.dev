import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.js",
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
  },
});
