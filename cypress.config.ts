
const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    theMovie: 'https://api.themoviedb.org/3/movie',
    localhost: "http://localhost:3000",
    token: process.env.API_TOKEN,
  }
  },
});