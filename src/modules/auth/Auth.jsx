import { nanoid } from 'nanoid';
import { Suspense, useState, createContext } from 'react';
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

function Auth() {
  const [buttonText, setButtonText] = useState('');
  const [form, setForm] = useState('');

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default Auth;
