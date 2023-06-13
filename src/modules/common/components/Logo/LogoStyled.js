import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoContainer = styled(NavLink)`
  display: block;
  width: 120px;
  margin: ${p => p.theme.space.center};

  @media screen and (min-width: 576px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
