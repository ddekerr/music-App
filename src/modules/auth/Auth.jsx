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
    <>
      <Background />

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross" />
          <Greeting>Time to WORSHIP</Greeting>
        </Logo>
        <RegistrationList>
          {registrationList.map(({ href, text, isBtn }) => (
            <RegItem>
              <RegLink to={href} className={isBtn ? 'reg-button' : ''}>
                {text}
              </RegLink>
            </RegItem>
          ))}
        </RegistrationList>
      </Registration>
    </>
  );
}

export default Auth;
