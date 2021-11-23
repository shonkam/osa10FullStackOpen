import { useMutation } from '@apollo/client';
import { DELETE_REVIEW, AUTHORIZED_USER } from '../graphql/queries';

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const { data, error } = await mutate({
      variables: { id },
      refetchQueries: [
        AUTHORIZED_USER
      ]
    });

    if (error) {
      console.log(error);
      return false;
    }
    if (data) {
      return true;
    }
  };

  return [deleteReview];

};

export default useDeleteReview;