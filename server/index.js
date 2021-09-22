const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index.resolver');

const PORT = 5000;


const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

server.listen({ port: PORT  }).then((res) => {
    console.log(`🚀  Server ready at ${res.url}`);
});