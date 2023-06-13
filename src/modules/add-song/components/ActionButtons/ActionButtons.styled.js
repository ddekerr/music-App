import styled from 'styled-components';
import { Button } from 'modules/common';

export const AddButton = styled(Button)`
  :not(:last-of-type) {
    margin-right: 10px;
  }

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

export const ButtonList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;

  display: flex;
  flex-direction: column;
  z-index: 999;

  & li {
    width: 100%;
    align-self: flex-end;
  }
`;

export const AddButtonOption = styled(Button)`
  width: 100%;
  padding: 5px 20px;
`;
