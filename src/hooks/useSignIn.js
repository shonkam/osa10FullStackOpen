import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/queries';

const useSignIn = () => {
  const [mutate] = useMutation(AUTHORIZE);
  let token;

  const signIn = async (username, password) => {

    const response = await mutate({ variables: { username, password } });
    const token = response.data.authorize.accessToken;
    return token;
  };

  return [signIn, token];
};

export default useSignIn;