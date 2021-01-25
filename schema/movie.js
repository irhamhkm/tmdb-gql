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
    vote_count: Int
    vote_average: Float
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

  type MutationResponse {
    status_code: Int
    status_message: String
  }

  type Query {
    config: Config,
    searchMovie(query: String!): SearchMovie,
    movieDetail(movie_id: Int!): Movie,
    recommendations(movie_id: Int!): SearchMovie,
    similarMovies(movie_id: Int!): SearchMovie,
    upcomingMovies(page: Int!): SearchMovie,
    popularMovies(page: Int!): SearchMovie,
    topRatedMovies(page: Int!): SearchMovie
  }
  type Mutation {
    rateMovie(movie_id: String, session_id: String, value: Float): MutationResponse,
    deleteRating(movie_id: String, session_id: String): MutationResponse
  }
`;

export const resolvers = {
  Query: {
    config(parent, args, context) {
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
    upcomingMovies(parents, args, context) {
      return context.dataSources.movieAPI.getUpcomingMovies(args);
    },
    popularMovies(parents, args, context) {
      return context.dataSources.movieAPI.getPopularMovies(args);
    },
    topRatedMovies(parents, args, context) {
      return context.dataSources.movieAPI.getTopRatedMovies(args);
    }
  }
};
