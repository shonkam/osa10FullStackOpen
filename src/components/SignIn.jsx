import React from 'react';
import { Formik } from 'formik';

import SingInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;