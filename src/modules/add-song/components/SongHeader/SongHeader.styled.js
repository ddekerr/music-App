import styled from 'styled-components';
import { Input } from 'modules/common';

export const UserImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-color: #fff;
  cursor: pointer;

  @media screen and (max-width: 479.98px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 480px) {
    margin-right: 20px;
  }
`;

export const FieldsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: justify;
  flex-grow: 1;
  gap: 10px;
`;

export const UserImageUploadContainer = styled.img`
  width: 100%;
`;

export const InputField = styled(Input)``;
