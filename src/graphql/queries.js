import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword){
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

export const REPOSITORY = gql`
  query ($id: ID!){
    repository(id: $id){
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
        reviews {
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                id
                username
              }
            }
          }
        }
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

export const CREATE_REVIEW = gql`
  mutation ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String){
      createReview(
        review: {
          repositoryName: $repositoryName,
          ownerName: $ownerName,
          rating: $rating,
          text: $text
        })
    {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($username: String!, $password: String!){
      createUser(
        user: {
          username: $username,
          password: $password
        })
    {
      username
    }
  }
`;