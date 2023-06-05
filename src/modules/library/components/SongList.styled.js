import styled from 'styled-components';

export const SongItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  font-family: Roboto;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const ActionButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;
