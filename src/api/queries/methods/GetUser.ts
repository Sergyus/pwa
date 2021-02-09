import * as Types from '../../generated/types.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type GetUsersQueryVariables = Types.Exact<{
  params: Types.PaginationInput;
}>;

export type GetUsersQuery = { __typename?: 'Query' } & {
  users: { __typename?: 'UserWithPagination' } & Pick<
    Types.UserWithPagination,
    'count' | 'currentPage' | 'totalPages'
  > & {
      data?: Types.Maybe<
        Array<
          { __typename?: 'User' } & Pick<
            Types.User,
            'id' | 'name' | 'username' | 'email' | 'phone' | 'website'
          >
        >
      >;
    };
};

export const GetUsersDocument = gql`
  query GetUsers($params: PaginationInput!) {
    users(pagination: $params) {
      data {
        id
        name
        username
        email
        phone
        website
      }
      count
      currentPage
      totalPages
    }
  }
`;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const namedOperations = {
  Query: {
    GetUsers: 'GetUsers',
  },
};
