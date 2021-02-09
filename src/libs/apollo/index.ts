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
export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: CONFIG.url,
    credentials: 'same-origin',
  }),
  cache: __SERVER__
    ? new InMemoryCache()
    : new InMemoryCache().restore(
        window.__APOLLO_STATE__ as NormalizedCacheObject,
      ),
  connectToDevTools: true,
  ssrForceFetchDelay: 100,
  ssrMode: __SERVER__,
});
