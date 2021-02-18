import { typeDefs as Movie, resolvers as movieResolvers } from './movie.js';

const schemaArray = [Movie];
const schemaResolvers = [movieResolvers];
export { schemaArray, schemaResolvers };
