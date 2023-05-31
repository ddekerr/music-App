import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserActionListContainer = styled.ul`
  margin-top: 40px;
  margin-left: 10px;

  font-size: 20px;

  @media screen and (min-width: 768px) {
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
  padding-right: 90px;
`;

export const ActionLink = styled(NavLink)`
  display: flex;
`;
