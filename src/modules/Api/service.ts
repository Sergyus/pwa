import { CONFIG } from './consts';
import fetch from 'isomorphic-fetch';
import { apolloClient } from '@libs/apollo';
import { ApolloQueryResult } from '@apollo/client';
import {
  GetUsersDocument,
  GetUsersQuery,
  GetUsersQueryVariables,
} from '@api/queries/methods/GetUser';

/**
 * Api Service
 */
class ApiService {
  private readonly url = CONFIG.url;
  protected readonly client = apolloClient;

  public async request<T>(source: string): Promise<T> {
    const response = await fetch(this.url + source);
    return await response.json();
  }

  public getUsers(
    params: GetUsersQueryVariables,
  ): Promise<ApolloQueryResult<GetUsersQuery>> {
    return this.client.query({ query: GetUsersDocument, variables: params });
  }
}

export default new ApiService();
