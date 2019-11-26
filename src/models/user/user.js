// Import Mongoose Schema
const { Schema } = require("mongoose");
// Import GraphQL compose with Mongoose
const { composeWithMongoose } = require("graphql-compose-mongoose");
// Import Database Instance
const { db } = require("../../mongo/db");

/*
    Define the User Model properties.
    _id will be automatically added by mongoose
    as an ObjectID, along with CreatedAt an
    UpdatedAt fields since we are passing timestamps
    option.
*/
const UserModelDefinition = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: String,
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  { collection: "Users", timestamps: true }
);

// Create an index on the email field for performances
UserModelDefinition.index({ email: 1 }, { background: true });

// Create the Mongoose model for a User
const UserModel = db.model("User", UserModelDefinition);

// Create the GraphQL schema for a User
const UserSchema = composeWithMongoose(UserModel);

// Export the User Mongoose Model
exports.model = UserModel;

// Export the User GraphQL Schema
exports.schema = UserSchema;
