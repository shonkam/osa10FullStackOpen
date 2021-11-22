import { useMutation } from '@apollo/client';
import { CREATE_REVIEW, AUTHORIZED_USER } from '../graphql/queries';

const useCreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    const { data, error } = await mutate({
      variables: { repositoryName, ownerName, rating, text },
      refetchQueries: [
        AUTHORIZED_USER
      ]
    });

    if (error) {
      console.log(error);
    }
    if (data) {
      const result = data.createReview.repositoryId;
      return result;
    }
    else {
      return 0;
    }
  };

  return [createReview];

};

export default useCreateReview;