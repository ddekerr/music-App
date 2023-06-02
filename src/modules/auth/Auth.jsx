import { nanoid } from 'nanoid';
import { Suspense } from 'react';
import profile from '../../image/pngegg.png';
import {
  Registration,
  Background,
  Logo,
  Picture,
  Greeting,
  RegistrationList,
  RegLink,
  RegItem,
} from './Auth.styled';
import { registrationList } from 'constants/registrationList';
import RegistrationForm from './components/RegistrationForm';
import { Box } from 'modules/common';

function Auth() {
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
            {registrationList.map(({ href, text, isBtn, icon: Icon }) => (
              <RegItem key={nanoid()}>
                <RegLink to={href} className={isBtn ? 'reg-button' : ''}>
                  {Icon && <Icon style={{ marginRight: '10px' }} />}
                  <span>{text}</span>
                </RegLink>
              </RegItem>
            ))}
          </RegistrationList>
        </Box>
      </Registration>
    </Suspense>
  );
}

export default Auth;
