import { Formik } from 'formik';
import {
  LoginFormContainer,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginForm.styled';
import { Box } from 'modules/common';

import { useDispatch } from 'react-redux';
import { register } from 'app/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    return;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <LoginFormContainer>
        <Box position="relative">
          <LoginLabel htmlFor="name">Name:</LoginLabel>
          <LoginInput id="name" name="name" type="text" required />
        </Box>

        <Box position="relative">
          <LoginLabel htmlFor="email">E-mail:</LoginLabel>
          <LoginInput id="email" name="email" type="email" required />
        </Box>

        <Box position="relative">
          <LoginLabel htmlFor="password">Password:</LoginLabel>
          <LoginInput id="password" name="password" type="password" required />
        </Box>

        <LoginButton type="submit">Sign Up</LoginButton>
      </LoginFormContainer>
    </Formik>
  );
};

export default LoginForm;
