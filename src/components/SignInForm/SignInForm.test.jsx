import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInForm from './index';
import { Formik } from 'formik';
import * as yup from 'yup';

describe('SignInForm', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
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

      const onSubmit = jest.fn();
      const { getByTestId } = render(
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>);

      fireEvent.changeText(getByTestId('usernameField'), 'matti');
      fireEvent.changeText(getByTestId('passwordField'), 'salasana');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'matti',
          password: 'salasana',
        });
      });
    });
  });
});