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

function Auth() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Background />

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross" />
          <Greeting>Time to WORSHIP</Greeting>
        </Logo>
        <RegistrationList>
          {registrationList.map(({ href, text, isBtn, icon: Icon }) => (
            <RegItem>
              <RegLink to={href} className={isBtn ? 'reg-button' : ''}>
                {Icon && <Icon style={{ marginRight: '10px' }} />}
                <span>{text}</span>
              </RegLink>
            </RegItem>
          ))}
        </RegistrationList>
      </Registration>
    </Suspense>
  );
}

export default Auth;
