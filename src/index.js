// Import the Apollo Server app
const app = require("./app/app");
// Connect to MongoDB
require("./mongo/db");

// Create the Apollo Server Lambda Handler
const handler = app.createHandler();

// Export the Apollo Server Lambda Handler
exports.handler = (event, context) => {
  return new Promise((res, rej) => {
    let callback = (error, body) => (error ? rej(errror) : res(body));
    handler(event, context, callback);
  });
};
