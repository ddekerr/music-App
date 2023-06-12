import React, { useState } from 'react';
import {
  AddSongForm,
  UserImageUploadInput,
  UserImageUploadLabel,
  UserImageUploadContainer,
  InputField,
  AddButton,
  Submit,
} from './SongForm.styled';
import { Box, Text } from 'modules/common';
import userImageDefault from '../../../../image/add-image.png';
import { EditableTextBlock, TextAreaBlock } from '..';
import { partOfSongList } from 'constants';
import { nanoid } from 'nanoid';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addSong } from 'app/songs/operations';

const initialValues = {
  is_public: false,
  is_moderate: false,
  title: '',
  author: '',
  genres: [],
  path_to_song: '',
  path_to_video: '',
  path_to_img: '',
  text: [],
  chords: [],
};

const SongForm = () => {
  // const [uploadedImage, setUploadedImage] = useState(null);
  const [isVisualAddList, setIsVisualAddList] = useState(false);
  const [fields, setFields] = useState(initialValues);
  const [focusField, setFocusField] = useState('');
  const dispatch = useDispatch();

  const selectOption = evt => {
    let { innerText } = evt.target;
    let data = {
      ...fields,
      text: [...fields.text, { block_title: innerText, block_text: '' }],
    };
    setFields(data);
    setIsVisualAddList(false);
  };

  const handleChangeInput = evt => {
    const { name, value } = evt.target;
    let data = { ...fields };
    data[name] = value;
    setFields(data);
  };

  const handleChangeTextArea = (index, evt) => {
    const { value } = evt.target;
    let data = { ...fields };
    data.text[index].block_text = value;
    setFields(data);
  };

  const handleClick = evt => {
    evt.preventDefault();
    setFocusField(evt.currentTarget.dataset.name);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addSong(fields));
  };

  return (
    <AddSongForm onSubmit={handleSubmit}>
      {/* HEADER BLOCK */}
      <Box display="flex">
        <UserImageUploadLabel htmlFor="file">
          {/* <UserImageUploadContainer src={uploadedImage || userImageDefault} /> */}
          <UserImageUploadContainer src={userImageDefault} />
          <UserImageUploadInput
            type="file"
            name="file"
            id="file"
            // onChange={handleChangeImg}
          />
        </UserImageUploadLabel>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          width={0}
        >
          <InputField
            type="text"
            name="title"
            id="title"
            onChange={handleChangeInput}
          />
          <InputField
            type="text"
            name="author"
            id="author"
            onChange={handleChangeInput}
          />
        </Box>
      </Box>

      {/* ADD BUTTONS BLOCK */}
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <AddButton type="button">Add MP4</AddButton>
        <AddButton type="button">Add MP3</AddButton>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          position="relative"
        >
          <Text
            color="white"
            style={{ cursor: 'pointer' }}
            onClick={() => setIsVisualAddList(true)}
          >
            Add Verse
          </Text>
          {/* <IoMdArrowDropdown style={{fill: "#fff"}} /> */}
          <Box
            as="ul"
            position="absolute"
            className={isVisualAddList ? '' : 'visually-hidden'}
          >
            {partOfSongList.map(part => (
              <li key={nanoid()}>
                <button
                  as="button"
                  type="button"
                  name={part}
                  onClick={selectOption}
                >
                  {part}
                </button>
              </li>
            ))}
          </Box>
        </Box>
      </Box>

      {/* TEXT BLOCKS */}
      {fields.text.map((block, index) => (
        <Box key={index} mt={2}>
          <Text color="white">{block.block_title.toUpperCase()}</Text>
          {(block.block_title === focusField || block.block_text === '') && (
            <TextAreaBlock
              index={index}
              handleChange={handleChangeTextArea}
              handleFocus={evt => setFocusField(evt.target.name)}
              handleBlur={() => setFocusField('')}
              block={block}
            />
          )}

          {block.block_title !== focusField && block.block_text !== '' && (
            <EditableTextBlock block={block} handleClick={handleClick} />
          )}
        </Box>
      ))}

      <Box display="flex" justifyContent="flex-end">
        <Submit type="submit">Save</Submit>
      </Box>
    </AddSongForm>
  );
};

export default SongForm;
