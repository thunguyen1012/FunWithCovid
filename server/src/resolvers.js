module.exports = {
  Query: {
    countries: async (source, args, { dataSources }) => {
      const allCountries = await dataSources.statisticAPIs.getAllCountries();

      return allCountries;
    },
  },
};
