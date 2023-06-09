import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: #000;

  @media screen and (min-width: 576px) {
    position: static;
    background-color: transparent;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 576px) {
    justify-content: flex-start;
  }
`;

export const LiPadding = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 576px) {
    :nth-child(3) {
      flex-grow: 1;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  gap: 5px;

  color: #fff;
  cursor: pointer;

  transition-duration: 500ms;

  :focus,
  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
`;

export const MenuText = styled.p`
  font-size: 10px;
  line-height: 1.14;

  @media screen and (min-width: 576px) {
    font-size: 18px;
    line-height: 1.16;
  }
`;
