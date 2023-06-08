import React, { useState } from 'react';
import {
  UserImageUploadInput,
  UserImageUploadLabel,
  UserImageUploadContainer,
  AddButton,
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
  const [fields, setFields] = useState([]);
  const [focusField, setFocusField] = useState('');

  const selectOption = evt => {
    let { innerText } = evt.target;
    const includes = fields.reduce(
      (acc, field) => (field.name.includes(innerText) ? acc + 1 : acc),
      0
    );

    if (includes > 0) innerText += includes;
    let data = [...fields, { name: innerText, value: '' }];
    data[innerText] = '';
    setFields(data);

    setIsVisualAddList(false);
  };

  const handleChange = (index, evt) => {
    const { value } = evt.target;
    let data = [...fields];
    data[index].value = value;
    setFields(data);
  };

  const handleClick = evt => {
    evt.preventDefault();
    setFocusField(evt.currentTarget.name);
  };

  return (
    <form>
      {/* HEADER BLOCK */}
      <Box display="flex">
        <UserImageUploadLabel htmlFor="file">
          <UserImageUploadContainer src={uploadedImage || userImageDefault} />
          <UserImageUploadInput type="file" name="file" id="file" />
          {/* <input type="file" name="file" id="file" /> */}
        </UserImageUploadLabel>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          width={0}
        >
          <input type="text" name="title" id="title" />
          <input type="text" name="author" id="author" />
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
      {fields.map((field, index) => (
        <Box key={index}>
          {(field.name === focusField || field.value === '') && (
            <TextAreaBlock
              index={index}
              handleChange={handleChange}
              handleFocus={evt => setFocusField(evt.target.name)}
              handleBlur={() => setFocusField('')}
              field={field}
            />
          )}

          {field.name !== focusField && field.value !== '' && (
            <EditableTextBlock field={field} handleClick={handleClick} />
          )}
        </Box>
      ))}

      <Box display="flex" justifyContent="flex-end">
        <Submit>Save</Submit>
      </Box>
    </form>
  );
};

export default SongForm;
