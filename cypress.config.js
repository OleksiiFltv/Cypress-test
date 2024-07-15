const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  responseTimeout: 40000,
  screenshotsFolder: "screenshot",
  user: {
    email: "a.filatov1@yopmail.com",
    password: "Aaa!1234",
  },
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space/",
    retries: {
      runMode: 1,
      openMode: 1,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
