import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { CONFIG } from './consts';

/**
 * Apollo Client
 */
export const client = new ApolloClient({
  link: createHttpLink({
    uri: CONFIG.url,
    credentials: 'same-origin',
  }),
  ssrMode: true,
  cache: __CLIENT__
    ? new InMemoryCache().restore(
        window.__APOLLO_STATE__ as NormalizedCacheObject,
      )
    : new InMemoryCache(),
  connectToDevTools: true,
  credentials: 'same-origin',
});
