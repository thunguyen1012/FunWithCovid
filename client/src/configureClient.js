import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { SERVER } from './constants';

const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
});

const link = httpLink;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
