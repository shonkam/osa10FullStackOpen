import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges{
        node{
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`;

export const AUTHORIZE = gql`
  mutation ($username: String!, $password: String!){
      authorize(
        credentials: {
          username: $username,
          password: $password
        })
    {
      accessToken
    }
  }
`;