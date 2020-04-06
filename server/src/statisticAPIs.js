const { RESTDataSource } = require('apollo-datasource-rest');

class StatisticAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://corona.lmao.ninja/';
  }

  async getAllCountries() {
    const response = await this.get('countries');
    return Array.isArray(response) ? response : [];
  }
}

module.exports = StatisticAPI;
