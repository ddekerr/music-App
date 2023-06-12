import styled from 'styled-components';

export const UserImageUploadInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const UserImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;

  background-color: #fff;
`;

export const UserImageUploadContainer = styled.img`
  width: 100%;
`;

export const InputField = styled.input``;
