import { RESTDataSource } from 'apollo-datasource-rest';

export default class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  willSendRequest(request) {
    request.params.set('api_key', this.context.key);
  }

  async getConfig() {
    const url = `${this.baseURL}/configuration`;
    const result = await this.get(url);
    return result;
  }

  async getSearchMovie({ query }) {
    const url = `${this.baseURL}/search/movie?query=${query}`;
    const result = await this.get(url);
    return result;
  }

  async getUpcomingMovies() {
    const url = `${this.baseURL}/movie/upcoming`;
    const result = await this.get(url);
    console.log('get upcoming movies -- ', url );
    return result;
  }

  async getPopularMovies() {
    const url = `${this.baseURL}/movie/popular`;
    const result = await this.get(url);
    return result;
  }

  async getTopRatedMovies() {
    const url = `${this.baseURL}/movie/top_rated`;
    const result = await this.get(url);
    return result;
  }

  async getMovieDetail({ movie_id }) {
    const url = `${this.baseURL}/movie/${movie_id}`;
    const result = await this.get(url);
    return result;
  }

  async rateMovie({ movie_id, session_id, value }) {
    const url = `${this.baseURL}/movie/${movie_id}/rating?session_id=${session_id}`;
    const result = await this.post(url, { value });
    return result;
  }

  async deleteRating({ movie_id, session_id }) {
    const url = `${this.baseURL}/movie/${movie_id}/rating?session_id=${session_id}`;
    const result = await this.delete(url);
    return result;
  }

  async getRecommendations({ movie_id }) {
    const url = `${this.baseURL}/movie/${movie_id}/recommendations`;
    const result = await this.get(url);
    return result;
  }

  async getSimilarMovies({ movie_id }) {
    const url = `${this.baseURL}/movie/${movie_id}/similar`;
    const resutl = await this.get(url);
    return result;
  }
  // async getDiscover(page = 1) {
  //   const url = `${this.baseURL}/discover/movie?page=${page}&sort_by=popularity`
  //   console.log(url);
  //   const result = await this.get(url);
  //   return result;
  // }
}