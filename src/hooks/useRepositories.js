import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  while (loading === true) {
    return [];
  }

  if (error === true) {
    return error;
  }

  return data;
};

export default useRepositories;