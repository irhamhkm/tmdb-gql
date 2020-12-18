export const typeDefs = `
  type Movie {
    poster_path: String
    overview: String
    release_date: String
    id: Int
    title: String
    backdrop_path: String
    popularity: Int
  }

  type Discover {
    total_results: Int
    results: [Movie]
    page: Int
    total_pages: Int
  }

  type Query {
    discover(page: Int): Discover,
  }
`;

export const resolvers = {
  Query: {
    discover(parent, args, context) {
      return context.dataSources.movieAPI.discover(args.page);
    }
  }
};
