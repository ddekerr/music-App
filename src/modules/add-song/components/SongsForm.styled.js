import styled from 'styled-components';
import { Field, Form } from 'formik';

export const AddSongForm = styled(Form)``;

export const UserImageUploadInput = styled(Field)`
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;

  background-color: #fff;
`;

export const UserImageUploadContainer = styled.img`
  width: 100%;
`;

export const InputField = styled(Field)``;

export const AddButton = styled.button`
  margin-right: 10px;
`;

export const AddVers = styled.select``;

export const SongArea = styled.div``;

export const NameArea = styled.p``;

export const Submit = styled.button``;
