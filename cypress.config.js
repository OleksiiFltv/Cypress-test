const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  responseTimeout: 40000
  e2e: {
    retries{
      runMode: 1,
      openMode: 1
    }
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
