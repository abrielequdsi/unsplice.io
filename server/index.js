const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// should go in an index.js file inside graphQL
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index.resolver');

const { MONGODB } = require('./config');

const PORT = 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// should go in an index.js file inside model
mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`🚀 Server running at ${res.url}`);
  });
