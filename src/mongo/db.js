// Import Mongoose
const mongoose = require("mongoose");

/* 
    Set a costant with the Mongo DB Url, read from .env.
    If no .env is set, than localhost is used
*/
const MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/";

/*
    Set a costant with the Mongo DB Connection Pools amount, read from .env
    If no .env is set, than 1 is used
*/
const CONNECTION_POOLS = process.env.MONGO_DB_CONNECTION_POOLS || 1;

/* 
    Declare a DB Instance. This allows to reuse the same Instance
    without opening a new connection every time. The Database used
    will be read from .env. If no .env is set, than
    a Database called Test is used 
*/
let db = connect(process.env.DATABASE_NAME || "Test");

// Connect to MongoDB
function connect(dbName) {
  return mongoose.createConnection(MONGO_DB_URL, {
    poolSize: CONNECTION_POOLS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    readPreference: "secondaryPreferred",
    useCreateIndex: true,
    dbName: dbName
  });
}

// Export the Database Instance
exports.db = db;
