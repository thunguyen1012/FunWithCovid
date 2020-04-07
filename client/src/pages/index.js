import React from 'react';
import gql from 'graphql-tag';

const GET_COUNTRY_NAMES = gql`
  query {
    countries {
      country
    }
  }
`;

const GET_COUNTRIES = gql`
  query {
    countries {
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

const GET_HISTORICAL = gql`
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

const Index = ({ data }) => {
  // set debugger to debug at server
  // debugger
  const hasData = !!data && data.countries.length > 0;

  // choose countries
  // view today
  // view historical

  return (
    <div className='container'>
      <h1 className='heading'>{message}</h1>
      {hasData && <div className='chartContainer'>haha</div>}
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  // set debugger to debug at server
  // debugger
  try {
    const { data, loading } = await ctx.apolloClient.query({
      query: GET_COUNTRY_NAMES,
    });
    return { data, loading };
  } catch (error) {
    return { error };
  }
};

export default Index;
