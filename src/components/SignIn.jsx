import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SingInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {

    const username = values.username;
    const password = values.password;

    try {
      await signIn(username, password);
      console.log('logged in successfully');
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;