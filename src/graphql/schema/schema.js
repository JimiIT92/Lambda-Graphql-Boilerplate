// Import the GraphQL Schema Composer
const { schemaComposer } = require("graphql-compose");
// Import the User Schema
const { schema: UserSchema } = require("../../models/user/user");
// Import the User Data Loader
const UserLoader = require("../../data/user/user-loader");

/*
    Add some Queries to the GraphQL schema.
    The queries will use the generated method from
    the graphql-compose library.
*/
schemaComposer.Query.addFields({
  users: UserSchema.get("$findMany"),
  user: UserSchema.get("$findById")
});

/*
    Add some Mutations to the GraphQL schema.
    The mutations will use the generate method from
    the graphql-compose library.
*/
schemaComposer.Mutation.addFields({
  create: UserSchema.get("$createOne"),
  update: UserSchema.get("$updateById")
});

// Export the GraphQL Schema
module.exports = schemaComposer.buildSchema();
