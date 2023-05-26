import "./Auth.css";
import profile from "../../image/pngegg.png";
import fonim from "../../image/555.jpg";
import { Registration, Hero, Logo, Picture, Greeting, RegistrationList, RegLink, RegData, RegItem} from "./Auth.styled";


function Auth() {
  return (
    <>
      <Hero>
      </Hero>

      <Registration>
        <Logo>
          <Picture src={profile} alt="cross"/>
          <Greeting>
            <p>Time to WORSHIP</p>
          </Greeting>
        </Logo>
        <RegistrationList className=" container">

          <RegItem>
            <RegData href="#" >click here fore free sing up</RegData>
          </RegItem>

          <RegItem>
            <RegLink href="#" >Continue with Google</RegLink>
          </RegItem>

          <RegItem>
            <RegLink href="#" >Continue with Facebook</RegLink>
          </RegItem>

          <RegItem>
            <RegLink href="#" >Continue with IOS</RegLink>
          </RegItem>

          <RegItem>
            <RegData href="#" >Log in</RegData>
          </RegItem>
          
        </RegistrationList>
      </Registration>
    </>
  );
}

export default Auth;
