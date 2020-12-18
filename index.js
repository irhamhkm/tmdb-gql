import { ApolloServer } from 'apollo-server';
import { schemaArray, schemaResolvers } from './schema/index.js';
import MovieAPI from './api/movie.js';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  typeDefs: schemaArray,
  resolvers: schemaResolvers,
  dataSources: () => {
    return {
      movieAPI: new MovieAPI
    };
  },
  context: () => {
    return {
      key: process.env.API_KEY
    }
  }
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log('API KEY', process.env.API_KEY);
});