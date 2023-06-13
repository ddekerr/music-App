import styled from 'styled-components';
import { Checkbox } from 'modules/common';

export const GenreInput = styled(Checkbox)`
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding: 10px;
    border: 1px solid hsl(0, 0%, 20%);
    border-radius: 0.5em;

    font-size: 18px;
    text-transform: capitalize;

    background-color: hsl(0, 0%, 25%);
    color: ${p => p.theme.colors.text};
    cursor: pointer;

    transition: transform 500ms ease-in-out;
  }

  :hover + label {
    transform: scale(1.05);
  }

  &:checked + label {
    border-color: ${p => p.theme.colors.checked};
    background-color: ${p => p.theme.colors.checked};
  }
`;
