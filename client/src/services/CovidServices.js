import gql from "graphql-tag";

export const GET_COUNTRY_NAMES = gql`
  query {
    countries {
      country
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries($selectingCountries: [String]) {
    countries(selectingCountries: $selectingCountries) {
      country
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      tests
    }
  }
`;

export const GET_HISTORICAL = gql`
  query Historical($selectingCountries: [String]) {
    historical(selectingCountries: $selectingCountries) {
      country
      timeline {
        cases {
          date
          value
        }
        deaths {
          date
          value
        }
        recovered {
          date
          value
        }
      }
    }
  }
`;

export const GET_VACCINE_HISTORICAL = gql`
  query VaccineHistorical($selectingCountries: [String]) {
    vaccineHistorical(selectingCountries: $selectingCountries) {
      country
      timeline {
        date
        value
      }
    }
  }
`;
