import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = signOut();
  if (logout) {
    return 'successfully signed out';
  }
  return 'something went wrong';
};

export default useSignOut;