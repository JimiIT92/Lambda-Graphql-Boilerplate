// Import Apollo Server Lambda
const { ApolloServer } = require("apollo-server-lambda");
// Import Cache Plugin
const cache = require("apollo-server-plugin-response-cache");
// Import the GraphQL schema
const schema = require("../graphql/schema/schema");
// Import the Log Error Helper
const logError = require("../helpers/error");

/*
    Create a new Apollo Server Instance. The plyaground will be enabled
    only if the STAGE environment is not set to "production". If no
    STAGE variable is set, than the playground will be enabled.
    Cache plugin is also applied, and the default max age for cached
    items will be set accordingly to the CACHE_MAX_AGE .env value. If no
    .env is set, than 10 is used
*/
const app = new ApolloServer({
  schema,
  formatError: logError,
  playground: process.env.STAGE !== "production" || true,
  cacheControl: {
    defaultMaxAge: process.env.CACHE_MAX_AGE || 10
  },
  context: ({ context }) => {
    context.callbackWaitsForEmptyEventLoop = false;
  },
  plugins: [cache()]
});

// Export the Apollo Server Instance
module.exports = app;
