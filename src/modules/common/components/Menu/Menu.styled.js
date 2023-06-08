import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  position: fixed;
  bottom: 0;

  width: 100%;
  padding: 10px 0;

  background-color: #000;

  @media screen and (min-width: 768px) {
    position: static;
    background-color: transparent;
    padding: 20px 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 30px;
    padding-bottom: 10px;
  }
`;

export const LiPadding = styled.li`
  @media screen and (min-width: 768px) {
    position: absolute;
    :nth-child(1) {
      left: 45px;
    }
    :nth-child(2) {
      left: 160px;
    }
    :nth-child(3) {
      right: 40px;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: column;

  color: #fff;
  cursor: pointer;

  transition-duration: 500ms;

  :focus,
  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuText = styled.p`
  @media screen and (max-width: 767px) {
    margin-top: 5px;
    font-size: 10px;
    line-height: 1.14;
  }
  @media screen and (min-width: 768px) {
    margin-left: 5px;
    font-size: 18px;
    line-height: 1.5;
  }
`;
