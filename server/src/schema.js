const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    countries(selectingCountries: [String]): [Country]!
    historical(selectingCountries: [String]): [Historical]!
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

  type Historical {
    country: String
    timeline: Timeline!
  }

  type Timeline {
    cases: [DataPoint!]!
    deaths: [DataPoint!]!
    recovered: [DataPoint!]!
  }

  type DataPoint {
    date: Date!
    value: Int!
  }
`;

module.exports = typeDefs;
