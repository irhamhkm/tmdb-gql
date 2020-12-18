import { RESTDataSource } from 'apollo-datasource-rest';

export default class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  willSendRequest(request) {
    request.params.set('api_key', this.context.key);
  }

  async discover(page = 1) {
    const url = `${this.baseURL}/discover/movie?page=${page}&sort_by=popularity`
    console.log(url);
    const result = await this.get(url);
    return result;
  }
}