import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/queries';

const useCreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    const { data, error } = await mutate({
      variables: { repositoryName, ownerName, rating, text }
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