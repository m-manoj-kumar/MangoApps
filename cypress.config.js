const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "https://siddasia.mangoapps.com/"
  },
  compilerOptions: {
    "types": ["cypress", "node", "cypress-real-events"]
  },
  defaultCommandTimeout: 60000,
  numTestsKeptInMemory: 0,
  viewportHeight: 720,
  viewportWidth: 1280
});