import { Formik } from 'formik';
import { useState } from 'react';
import {
  AddSongForm,
  UserImageUploadInput,
  UserImageUploadLabel,
  UserImageUploadContainer,
  InputField,
  AddButton,
  AddTextAreaButton,
  Submit,
} from './SongForm.styled';
import { Box, Text } from 'modules/common';
import userImageDefault from '../../../../image/add-image.png';
import { EditableTextBlock, TextAreaBlock } from '..';
import { partOfSongList } from 'constants';
import { nanoid } from 'nanoid';

const SongForm = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [editableText, setEditableText] = useState({});
  const [textBlockList, setTextBlockList] = useState([]);

  const handleChange = evt => {
    setUploadedImage(evt.target.files[0]);
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    setEditableText(prevState => ({ ...prevState, [name]: value }));
  };

  const selectOption = evt => {
    setTextBlockList(prevState => {
      const { value } = evt.target;
      const countIncludes = prevState.reduce(
        (result, item) => (item.includes(value) ? (result += 1) : result),
        0
      );
      return [...prevState, value + (countIncludes + 1)];
    });
  };

  return (
    <Formik>
      <AddSongForm>
        {/* HEADER BLOCK */}
        <Box display="flex">
          <UserImageUploadLabel htmlFor="file">
            <UserImageUploadContainer src={uploadedImage || userImageDefault} />
            <UserImageUploadInput
              type="file"
              name="file"
              id="file"
              onChange={handleChange}
            />
          </UserImageUploadLabel>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            width={0}
          >
            <InputField type="text" name="title" id="title" />
            <InputField type="text" name="author" id="author" />
          </Box>
        </Box>

        {/* ADD BUTTONS BLOCK */}
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <AddButton type="button">Add MP4</AddButton>
          <AddButton type="button">Add MP3</AddButton>
          <Box flexGrow="1">
            <Text>Add</Text>
            <ul className="visually-hidden">
              {partOfSongList.map(part => (
                <li key={nanoid()}>
                  <button type="button">{part}</button>
                </li>
              ))}
            </ul>
          </Box>

          {/* <AddTextAreaButton as="select" name="add" onClick={selectOption}>
            <option value="intro">Intro</option>
            <option value="verse">Verse</option>
            <option value="chorus">Chorus</option>
            <option value="bridge">Bridge</option>
            <option value="outro">Outro</option>
            <option value="outro">Instrumental</option>
          </AddTextAreaButton> */}
        </Box>

        {/* TEXT BLOCK */}
        <TextAreaBlock handleBlur={handleBlur} name="verse" />
        <EditableTextBlock text={editableText} />

        <TextAreaBlock handleBlur={handleBlur} name="chorus" />
        {/* <EditableTextBlock text={editableText} /> */}

        <Box display="flex" justifyContent="flex-end">
          <Submit>Save</Submit>
        </Box>
      </AddSongForm>
    </Formik>
  );
};

export default SongForm;
