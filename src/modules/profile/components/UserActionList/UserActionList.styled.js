import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserActionListContainer = styled.ul`
  margin-top: 40px;
  font-size: 20px;

  @media screen and (max-width: 479.98px) {
    position: absolute;
    right: 0; top: 100%;
  }



  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 30%;
    border-right: solid 1px #a0a0a0;
  }
`;

export const ActionItem = styled.li`
  :not(:nth-last-of-type(-n + 1)) {
    margin-bottom: 10px;
  }
`;

export const ActionText = styled.p`
  color: white;
  padding-left: 10px;
  flex-grow: 1;
`;

export const ActionLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;


// #0b6112 green
// #0b4061 blue
// #d63209 red
// #2d2e00 black