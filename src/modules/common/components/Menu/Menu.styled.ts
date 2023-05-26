import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 10px 0;
  background-color: #000;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuLink = styled(NavLink)`
  display: block;
  color: #fff;
`;