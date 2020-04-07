import React from 'react';
import gql from 'graphql-tag';

const GET_COUNTRIES = gql`
  query countries($selectingCountries: [String]) {
    countries(selectingCountries: ["USA"]) {
      country
      cases
    }
  }
`;

const Index = ({ data, loading, error }) => {
  // set debugger to debug at server
  // debugger
  let message = '';
  if (loading) message = 'Loading...';
  if (error) message = error.message;
  if (data && data.users.length <= 0) message = 'No data';
  return (
    <div className='container'>
      <h1 className='heading'>{message}</h1>
      {data && data.users.length > 0 && (
        <div className='chart'>
          {data}
        </div>
      )}
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  // set debugger to debug at server
  // debugger
  try {
    const { data, loading } = await ctx.apolloClient.query({
      query: GET_COUNTRIES,
    });
    return { data, loading };
  } catch (error) {
    return { error };
  }
};

export default Index;