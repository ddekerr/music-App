import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import profile from '../../image/pngegg.png';
import {
  Registration,
  Background,
  Logo,
  Picture,
  Greeting,
  RegistrationList,
  RegItem,
} from './Auth.styled';
import { registrationList } from 'constants';
import { RegistrationForm, RegistrationLink, LoginForm } from './components';
import { Box } from 'modules/common';
import { Context } from 'app/hooks/context';
import { useAuth } from 'app/hooks';

function Auth() {
  const [buttonText, setButtonText] = useState('');
  const [form, setForm] = useState('');
  const { isLoggedIn } = useAuth();

  const handleClick = async evt => {
    evt.preventDefault();
    setButtonText(evt.target.innerText);
    setForm(evt.target.innerText);
  };

  const handleClose = evt => {
    const { nodeName } = evt.target;
    if (nodeName !== 'A' && nodeName !== 'INPUT' && nodeName !== 'BUTTON') {
      setButtonText('');
      setForm('');
    }
  };

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Context.Provider value={{ handleClose }}>
      <Background />

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross" />
          <Greeting>Time to WORSHIP</Greeting>
        </Logo>
        <Box p={3}>
          {form === 'Log In' && <LoginForm />}
          {form === 'Sing up' && <RegistrationForm />}
          <RegistrationList>
            {registrationList.map(
              link =>
                buttonText !== link.text && (
                  <RegItem key={nanoid()}>
                    <RegistrationLink link={link} click={handleClick} />
                  </RegItem>
                )
            )}
          </RegistrationList>
        </Box>
      </Registration>
    </Context.Provider>
  );
}

export default Auth;
