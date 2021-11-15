import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [mutate] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();


  const signIn = async (username, password) => {
    try {
      const response = await mutate({ variables: { username, password } });
      const token = response.data.authorize.accessToken;
      await authStorage.setAccessToken(token);
      await apolloClient.resetStore();
    } catch (err) {
      console.log(err);
    }
  };

  return [signIn];
};

export default useSignIn;