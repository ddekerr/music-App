import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.inlg};
  border: ${p => p.theme.borders.dark};

  background-color: ${p => p.theme.colors.bg.main};
  color: ${p => p.theme.colors.fields.text};
  outline: none;

  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.normal};

  cursor: pointer;
  transition: background-color ${p => p.theme.tr_duration} ease-in-out,
    transform ${p => p.theme.tr_duration} ease-in-out;

  :not(:disabled):hover,
  :not(:disabled):focus {
    background-color: ${p => p.theme.colors.bg.disabled};
    transform: scale(1.05);
  }

  :disabled {
    border: none;
    color: ${p => p.theme.colors.fields.disabled};
    cursor: auto;
  }
`;

export const Input = styled.input`
  width: ${p => p.theme.sizes.full};
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.inlg};
  border: ${p => p.theme.borders.dark};

  background-color: ${p => p.theme.colors.bg.main};
  color: ${p => p.theme.colors.fields.text};
  outline: none;

  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.normal};

  transition: background-color ${p => p.theme.tr_duration} ease-in-out,
    transform ${p => p.theme.tr_duration} ease-in-out;

  :focus {
    background-color: ${p => p.theme.colors.bg.disabled};
    transform: scale(1.05);
  }
`;

export const Textarea = styled.textarea`
  width: ${p => p.theme.sizes.full};
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.inlg};
  border: ${p => p.theme.borders.dark};

  background-color: ${p => p.theme.colors.bg.main};
  color: ${p => p.theme.colors.fields.text};
  outline: none;

  font-size: ${p => p.theme.fontSizes.lg};
  line-height: ${p => p.theme.lineHeights.normal};

  transition: background-color ${p => p.theme.tr_duration} ease-in-out;

  :focus {
    background-color: ${p => p.theme.colors.bg.disabled};
  }
`;

export const Checkbox = styled.input`
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;

    padding: ${p => p.theme.space.sm};
    border: ${p => p.theme.borders.checkbox};
    border-radius: ${p => p.theme.radii.button};

    font-size: ${p => p.theme.fontSizes.lg};
    text-transform: capitalize;

    background-color: ${p => p.theme.colors.bg.checkbox};
    color: ${p => p.theme.colors.text};
    cursor: pointer;

    transition: transform ${p => p.theme.colors.bg.disabled} ease-in-out;
  }

  :hover + label {
    transform: scale(1.05);
  }

  &:checked + label {
    border-color: ${p => p.theme.colors.fields.checked};
    background-color: ${p => p.theme.colors.fields.checked};
  }
`;
