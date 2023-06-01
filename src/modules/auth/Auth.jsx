import profile from '../../image/pngegg.png';
import {
  Registration,
  Hero,
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
      <Hero></Hero>

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross" />
          <Greeting>
            <p>Time to WORSHIP</p>
          </Greeting>
        </Logo>

        <RegistrationList className="container">
          {registrationList.map(({ href, text, isBtn }) => (
            <RegItem>
              <RegLink href={href} className={isBtn ? 'reg-button' : ''}>
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
