import React from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import SingUpForm from './SignUpForm';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1)
    .max(30)
    .required('Username is required'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Password confirmation is required')
});

const SignUp = () => {
  const [signUp] = useCreateUser();
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {

    const username = values.username;
    const password = values.password;

    console.log(username, password);

    try {
      const response = await signUp(username, password);
      if (response) {
        console.log('signed up successfully');
        await signIn(username, password);
        console.log('logged in successfully');
        history.push("/");
      }
      else {
        console.log('something went wrong when signing up');
      }
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
      {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;