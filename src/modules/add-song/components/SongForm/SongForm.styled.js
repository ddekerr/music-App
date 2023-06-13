import styled from 'styled-components';
import { Button, Checkbox } from 'modules/common';

export const AddSongForm = styled.form``;

export const Public = styled(Checkbox)`
  & + label {
    margin-right: 20px;
  }
`;

export const Submit = styled(Button)`
  width: 100%;

  @media screen and (min-width: 576px) {
    max-width: 200px;
    width: 50%;

    :not(:disabled):hover,
    :not(:disabled):focus {
      background-color: #042;
    }
  }
`;

export const TextBLockTitle = styled.button`
  position: absolute;
  left: 20px;
  transform: translateY(-60%);

  padding: 10px 5px;
  border: 1px solid hsl(0, 0%, 10%);

  background-color: hsl(0, 0%, 12%);
  color: ${p => p.theme.colors.text};
  cursor: pointer;

  transition: background-color 500ms ease-in-out;

  :hover {
    background-color: #410;
  }

  & > * {
    display: inline-block;
    width: 100%;
    transition: opacity 0.5s ease-in-out;
  }

  & > .back {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  :hover > .front {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  :hover > .back {
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
  }
`;

export const Plug = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
  color: #afafaf;
`;
