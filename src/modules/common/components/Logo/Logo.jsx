import LogoIMG from "../../../../image/worship.png";
import { LogoContainer, LogoStyle } from "./LogoStyled";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoStyle src={LogoIMG}/>
    </LogoContainer>
  );
};

export default Logo;