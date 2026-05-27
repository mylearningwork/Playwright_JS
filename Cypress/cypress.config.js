const { defineConfig } = require('cypress');

module.exports = defineConfig({
    env: {
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },
    e2e: {
        baseUrl: 'https://example.cypress.io',
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile: 'cypress/support/e2e.js',
        fixturesFolder: 'cypress/fixtures',
        screenshotsFolder: 'cypress/screenshots',
        videosFolder: 'cypress/videos',
    },
});
