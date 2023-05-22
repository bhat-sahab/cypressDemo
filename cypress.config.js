// const { defineConfig } = require("cypress");

module.exports = {
  chromeWebSecurity: false,
  video: false,
  hideXHR: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  env: {
  },
  e2e: {
    baseUrl: 'https://saucedemo.com',
    specPattern: 'cypress/e2e/*.js',
    retries: 1
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  }
};
