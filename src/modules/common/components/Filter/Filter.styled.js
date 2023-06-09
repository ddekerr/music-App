import styled from 'styled-components';

export const FilterItem = styled.li`
  :not(:last-of-type) {
    margin-right: 25px;
  }
`;

export const FilterButton = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 10px;

  background-color: #e5e5e5;
  cursor: pointer;
`;
