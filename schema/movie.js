export const typeDefs = `
  type Movie {
    poster_path: String
    overview: String
    release_date: String
    id: Int
    title: String
    popularity: Float
    genres: [Genre]
    status: String
  }

  type SearchResult {
    poster_path: String
    overview: String
    release_date: String
    id: Int
    title: String
    popularity: Float
    genre_ids: [Int]
    status: String
  }

  type Genre {
    id: Int
    name: String
  }

  type ImageConfig {
    base_url: String
    secure_base_url: String
    poster_sizes: [String]
  }

  type Config {
    images: ImageConfig
  }

  type SearchMovie {
    total_results: Int
    results: [SearchResult]
    page: Int
    total_pages: Int
  }

  type Query {
    getConfig: Config,
    getSearchMovie(query: String!): SearchMovie,
    getMovieDetail(movie_id: Int!): Movie,
    getRecommendations(movie_id: Int!): SearchMovie,
    getSimilarMovies(movie_id: Int!): SearchMovie,
    getUpcomingMovies: SearchMovie,
    getPopularMovies: SearchMovie,
    getTopRatedMovies: SearchMovie
  }
`;

export const resolvers = {
  Query: {
    getConfig(parent, args, context) {
      return context.dataSources.movieAPI.getConfig();
    },
    getSearchMovie(parents, args, context) {
      return context.dataSources.movieAPI.getSearchMovie(args);
    },
    getMovieDetail(parent, args, context) {
      return context.dataSources.movieAPI.getMovieDetail(args);
    },
    getRecommendations(parents, args, context) {
      return context.dataSources.movieAPI.getRecommendations(args);
    },
    getSimilarMovies(parents, args, context) {
      return context.dataSources.movieAPI.getSimilarMovies(args);
    },
    getUpcomingMovies(parents, args, context) {
      return context.dataSources.movieAPI.getUpcomingMovies();
    },
    getPopularMovies(parents, args, context) {
      return context.dataSources.movieAPI.getPopularMovies();
    },
    getTopRatedMovies(parents, args, context) {
      return context.dataSources.movieAPI.getTopRatedMovies();
    }
  }
};
