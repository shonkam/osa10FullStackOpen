import React from 'react';
import useCreateReview from '../hooks/useCreateReview';

import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

import { useHistory } from "react-router-native";

const initialValues = {
  owner: '',
  name: '',
  rating: null,
  review: ''
};

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repository owner name is required'),
  name: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is required'),
  review: yup
    .string()
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  let history = useHistory();

  const onSubmit = async (review) => {
    const repositoryName = review.name;
    const ownerName = review.owner;
    let rating = review.rating;
    rating = parseInt(rating);
    const text = review.review;
    console.log(repositoryName, ownerName, rating, text);

    try {
      const response = await createReview(repositoryName, ownerName, rating, text);
      if (!response) {
        console.log('Something went wrong when adding a new review');
      }
      else {
        history.push(`/repository/${response}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;