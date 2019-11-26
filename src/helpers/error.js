// Log an error on the console
function logError(err, req, res, next) {
  console.log("Error occurred");
  console.error(err);
  next(err);
}

// Export the Helper Function
module.exports = logError;
