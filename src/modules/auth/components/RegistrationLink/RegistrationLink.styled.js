import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RegistratioLinkContainer = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  color: white;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  font-size: 16px;
  line-height: 1.16;
  font-weight: 500;
  text-align: center;

  :hover:not(.reg-button),
  :focus:not(.reg-button) {
    transform: scale(1.1);
  }

  :hover.reg-button,
  :focus.reg-button {
    background-color: #333;
  }
`;
