const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    countries: [Country]!
  }

  type Country {
    country: String
    cases: Int
    todayCases: Int
    deaths: Int
    todayDeaths: Int
    recovered: Int
    active: Int
    critical: Int
    tests: Int
  }
`;

module.exports = typeDefs;
