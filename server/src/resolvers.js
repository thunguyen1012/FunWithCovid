module.exports = {
  Query: {
    countries: async (source, args, { dataSources }) => {
      let allCountries = await dataSources.statisticAPIs.getAllCountries();
      let { selectingCountries } = args;
      if (selectingCountries !== null && selectingCountries !== undefined) {
        selectingCountries = Array.isArray(selectingCountries)
          ? selectingCountries
          : String.split(selectingCountries, ',');
        selectingCountries.length !== 0 &&
          (allCountries = allCountries.filter(
            (c) => selectingCountries.findIndex((i) => i === c.country) !== -1
          ));
      }

      return allCountries;
    },
    historical: async (source, args, { dataSources }) => {
      let allHistorical = await dataSources.statisticAPIs.getHistorical();
      let { selectingCountries } = args;
      if (selectingCountries !== null && selectingCountries !== undefined) {
        selectingCountries = Array.isArray(selectingCountries)
          ? selectingCountries
          : String.split(selectingCountries, ',');
        selectingCountries.length !== 0 &&
          (allHistorical = allHistorical.filter(
            (c) => selectingCountries.findIndex((i) => i === c.country) !== -1
          ));
      }

      return allHistorical;
    },
  },
  Timeline: {
    cases: (parent) => parent.cases,
    deaths: (parent) => parent.deaths,
    recovered: (parent) => parent.recovered,
  },
  DataPoint: {
    date: (parent) => parent.date,
    value: (parent) => parent.value,
  },
};
