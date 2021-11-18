import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {

  const { data, error } = useQuery(REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id }
  });
  if (error) {
    console.log(error);
  }
  return data;
};
export default useRepository;