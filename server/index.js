const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/index.resolver');
const { MONGODB } = require('./config');

const PORT = 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({ port: PORT });
    })
    .then((res) => {
        console.log(`🚀 Server running at ${res.url}`)
    })
