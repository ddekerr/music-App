import styled from 'styled-components';
import { Field, Form } from 'formik';
import { display } from 'styled-system';

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

export const SongArea = styled.div`
  margin-top: 15px;
  padding: 0 15px;
`;

export const NameArea = styled.p`
  color: white;
`;

export const SongText = styled(Field)`
  width: 100%;
  height: 200px;
`;

export const Submit = styled.button`
  border-radius: 30px;
  padding: 5px 15px;
  font-size: 30px;
  margin-top: 50px;
  margin-right: 15px;
  background-color: green;
`;
