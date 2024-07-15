const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  responseTimeout: 40000,
  screenshotsFolder: "screenshot",
  baseUrl: "https://qauto2.forstudy.space/",
  user: {
    email: "a.filatov2@yopmail.com",
    password: "Aaa!1234",
  },
  e2e: {
    retries: {
      runMode: 1,
      openMode: 1,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.js",
  },
});
