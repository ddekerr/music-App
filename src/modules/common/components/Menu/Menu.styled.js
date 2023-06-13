import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${p => p.theme.sizes.full};

  background-color: ${p => p.theme.colors.bg.main};

  @media screen and (min-width: 576px) {
    position: static;
    background-color: transparent;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space.sm};

  @media screen and (min-width: 576px) {
    justify-content: flex-start;
  }
`;

export const MenuItem = styled.li`
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
  padding: ${p => p.theme.space.inlg} ${p => p.theme.space.sm};
  gap: ${p => p.theme.space.insm};

  color: ${p => p.theme.colors.text.white};
  cursor: pointer;

  transition-duration: ${p => p.theme.tr_duration};

  :focus,
  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    padding: ${p => p.theme.space.sm};
  }
`;

export const MenuText = styled.p`
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.normal};

  @media screen and (min-width: 576px) {
    font-size: ${p => p.theme.fontSizes.lg};
    line-height: ${p => p.theme.lineHeights.bigger};
  }
`;
