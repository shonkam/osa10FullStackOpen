import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/queries';

const useCreateUser = () => {
  const [mutate] = useMutation(CREATE_USER);

  const createUser = async (username, password) => {
    const { data, error } = await mutate({
      variables: { username, password }
    });

    if (error) {
      console.log(error);
    }
    if (data) {
      const result = data.createUser.username;
      if (result === username) {
        return true;
      }
      return false;
    }
    else {
      return false;
    }
  };

  return [createUser];

};

export default useCreateUser;