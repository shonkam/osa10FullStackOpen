import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortedBy, bouncedFilter) => {

  const searchKeyword = bouncedFilter;
  let orderBy;
  let orderDirection;

  if (sortedBy === 'Latest repositories') {
    orderBy = 'CREATED_AT';
  }
  if (sortedBy === 'Highest rated repositories') {
    orderBy = 'RATING_AVERAGE';
    orderDirection = 'DESC';
  }
  if (sortedBy === 'Lowest rated repositories') {
    orderBy = 'RATING_AVERAGE';
    orderDirection = 'ASC';
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  while (loading) {
    return [];
  }

  if (error === true) {
    return error;
  }
  if (data) {
    return data;
  }
};


export default useRepositories;