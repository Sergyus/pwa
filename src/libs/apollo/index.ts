import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { CONFIG } from './consts';

/**
 * Apollo Client
 */
export const client = new ApolloClient({
  uri: CONFIG.url,
  ssrMode: __SERVER__,
  cache: __CLIENT__
    ? new InMemoryCache().restore(
        window.__APOLLO_STATE__ as NormalizedCacheObject,
      )
    : new InMemoryCache(),
  connectToDevTools: true,
});
