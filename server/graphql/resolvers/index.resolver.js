const userResolver = require('./user.resolver');
const moduleResolver = require('./module.resolver');
const contentResolver = require('./content.resolver');

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...moduleResolver.Query,
    ...contentResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...moduleResolver.Mutation,
    ...contentResolver.Mutation,
  },
};

module.exports = resolvers;
