import { nanoid } from 'nanoid';
import { Suspense, useState } from 'react';
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
import { RegistrationForm, RegistrationLink } from './components';
import { Box } from 'modules/common';

function Auth() {
  const [buttonText, setButtonText] = useState('');

  const handleClick = evt => {
    evt.preventDefault();
    setButtonText(evt.target.innerText);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Background />

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross" />
          <Greeting>Time to WORSHIP</Greeting>
        </Logo>
        <Box p={3}>
          <RegistrationForm />
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
    </Suspense>
  );
}

export default Auth;
