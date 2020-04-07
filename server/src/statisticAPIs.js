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

  async getHistorical() {
    const response = await this.get('v2/historical');
    const data = Array.isArray(response) ? response : [];

    const parse = (source) => {
      let result = [];
      const pairs = Object.entries(source);
      for (const [key, value] of pairs) {
        result.push({
          date: new Date(key),
          value,
        });
      }

      return result;
    };

    return data.map((i) => ({
      country: i.country,
      timeline: {
        cases: parse(i.timeline.cases),
        deaths: parse(i.timeline.deaths),
        recovered: parse(i.timeline.recovered),
      },
    }));
  }
}

module.exports = StatisticAPI;
