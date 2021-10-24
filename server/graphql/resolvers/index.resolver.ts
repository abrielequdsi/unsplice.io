import userResolver from './user.resolver';
import moduleResolver from './module.resolver';
import contentResolver from './content.resolver';

export const resolvers = {
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
