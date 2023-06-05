import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;
export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;
