import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {

  const getUser = () => {
    let data = useQuery(AUTHORIZED_USER, {
      context: {
        headers: {
          fetchPolicy: 'cache-and-network',
        }
      }
    });

    if (data.data == undefined) {
      return false;
    }
    data = data.data.authorizedUser;
    if (data === null) {
      return false;
    }

    if (data.username) {
      return true;
    }


  };

  const response = getUser();
  return response;
};

export default useAuthorizedUser;