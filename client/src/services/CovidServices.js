import gql from 'graphql-tag';

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
  query {
    historical {
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
