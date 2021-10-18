const { RESTDataSource } = require("apollo-datasource-rest");

class StatisticAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://disease.sh/v3/covid-19/";
  }

  async getAllCountries() {
    const response = await this.get("countries");
    return Array.isArray(response) ? response : [];
  }

  async getHistorical() {
    const response = await this.get("historical");
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

  async getVaccineHistorical() {
    const response = await this.get("vaccine/coverage/countries");
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
      timeline: parse(i.timeline),
    }));
  }
}

module.exports = StatisticAPI;
