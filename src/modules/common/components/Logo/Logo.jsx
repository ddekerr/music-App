import LogoIMG from '../../../../image/pngwing.com.png';
import { LogoContainer } from './LogoStyled';

const Logo = () => {
  return (
    <LogoContainer to="/">
      <img src={LogoIMG} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
