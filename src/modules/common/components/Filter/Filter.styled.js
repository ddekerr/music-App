import styled from 'styled-components';

export const FilterItem = styled.li`
  :not(:last-of-type) {
    margin-right: ${p => p.theme.space.md};
  }
`;

export const FilterButton = styled.button`
  padding: ${p => p.theme.space.insm};
  border: 0;
  border-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.btn};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
`;
