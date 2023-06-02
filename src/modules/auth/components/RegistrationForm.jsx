import { Formik } from 'formik';
import {
  RegistrationFormContainer,
  RegistrationLabel,
  RegistrationInput,
  RegistrationButton,
} from './RegistrationForm.styled';
import { Box } from 'modules/common';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    return;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <RegistrationFormContainer autoComplete="off">
        <Box position="relative">
          <RegistrationLabel htmlFor="name">Name:</RegistrationLabel>
          <RegistrationInput id="name" name="name" type="text" required />
        </Box>

        <Box position="relative">
          <RegistrationLabel htmlFor="email">E-mail:</RegistrationLabel>
          <RegistrationInput id="email" name="email" type="email" required />
        </Box>

        <Box position="relative">
          <RegistrationLabel htmlFor="password">Password:</RegistrationLabel>
          <RegistrationInput
            id="password"
            name="password"
            type="password"
            required
          />
        </Box>

        <RegistrationButton type="submit">Sign Up</RegistrationButton>
      </RegistrationFormContainer>
    </Formik>
  );
};

export default RegistrationForm;
