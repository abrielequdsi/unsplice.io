const userResolver = require('./user.resolver')
const programResolver = require('./program.resolver')
const moduleResolver = require('./module.resolver')

const resolvers = {
    Query: {
        ...userResolver.Query,
        ...programResolver.Query,
        ...moduleResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation
    },
}

module.exports = resolvers;