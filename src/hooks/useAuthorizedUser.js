import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (includeReviews) => {

  if (includeReviews) {
    const { data, error } = useQuery(AUTHORIZED_USER, {
      variables: { "includeReviews": true },
      headers: {
        fetchPolicy: 'cache-and-network',
      }
    });
    if (data) {
      //console.log('hook data', data.authorizedUser.reviews);
      console.log('hook data', data.authorizedUser.reviews);
      return data.authorizedUser.reviews;
    }
    if (error) {
      console.log(error);
    }

  }
  else {
    let data = useQuery(AUTHORIZED_USER, {
      context: {
        headers: {
          fetchPolicy: 'cache-and-network'
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
  }

};

export default useAuthorizedUser;