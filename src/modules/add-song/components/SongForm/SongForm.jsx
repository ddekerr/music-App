import { Formik } from 'formik';
import React, { useState } from 'react';
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
  const [isVisualAddList, setIsVisualAddList] = useState(false);

  const [editableText, setEditableText] = useState({});
  const [currentlyEdited, setCurrentlyEdited] = useState('');

  const selectOption = evt => {
    const { innerText: value } = evt.target;
    setEditableText(prevState => {
      const countIncludes = Object.keys(prevState).reduce(
        (result, item) => (item.includes(value) ? (result += 1) : result),
        0
      );
      return { ...prevState, [value + (countIncludes + 1)]: '' };
    });
    setIsVisualAddList(false);
  };

  return (
    <Formik initialValues={editableText}>
      <AddSongForm>
        {/* HEADER BLOCK */}
        <Box display="flex">
          <UserImageUploadLabel htmlFor="file">
            <UserImageUploadContainer src={uploadedImage || userImageDefault} />
            <UserImageUploadInput type="file" name="file" id="file" />
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
          <Box flexGrow="1" position="relative">
            <Text
              color="white"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsVisualAddList(true)}
            >
              Add
            </Text>
            <Box
              as="ul"
              position="absolute"
              className={isVisualAddList ? '' : 'visually-hidden'}
            >
              {partOfSongList.map(part => (
                <li key={nanoid()}>
                  <button type="button" name={part} onClick={selectOption}>
                    {part}
                  </button>
                </li>
              ))}
            </Box>
          </Box>
        </Box>

        {/* TEXT BLOCK */}
        <Box>
          <TextAreaBlock />
          <EditableTextBlock />
        </Box>

        <Box display="flex" justifyContent="flex-end">
          <Submit>Save</Submit>
        </Box>
      </AddSongForm>
    </Formik>
  );
};

export default SongForm;
