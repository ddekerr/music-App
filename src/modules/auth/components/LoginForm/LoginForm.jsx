import { Formik } from 'formik';
import {
  LoginFormContainer,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginForm.styled';
import { Box } from 'modules/common';

import { useDispatch } from 'react-redux';
import { login } from 'app/auth/operations';
import { useContext, useEffect } from 'react';
import { Context } from 'app/hooks/context';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { handleClose } = useContext(Context);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
    return;
  };

  useEffect(() => {
    document.addEventListener('click', handleClose);

    return () => {
      document.removeEventListener('click', handleClose);
    };
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <LoginFormContainer>
        <Box position="relative">
          <LoginLabel htmlFor="email">E-mail:</LoginLabel>
          <LoginInput id="email" name="email" type="email" required />
        </Box>

        <Box position="relative">
          <LoginLabel htmlFor="password">Password:</LoginLabel>
          <LoginInput id="password" name="password" type="password" required />
        </Box>

        <LoginButton type="submit">Log In</LoginButton>
      </LoginFormContainer>
    </Formik>
  );
};

export default LoginForm;
