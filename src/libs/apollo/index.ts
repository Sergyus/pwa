import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CONFIG } from './consts';

export const client = new ApolloClient({
  uri: CONFIG.url,
  cache: new InMemoryCache(),
});
