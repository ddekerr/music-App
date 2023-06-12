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
import userImageDefault from 'image/add-image.png';
import {
  EditableTextBlock,
  TextAreaBlock,
  SongHeader,
  ActionButtons,
} from '..';
import { partOfSongList } from 'constants';
import { nanoid } from 'nanoid';
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
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isVisualAddList, setIsVisualAddList] = useState(false);
  const [fields, setFields] = useState(initialValues);
  const [focusField, setFocusField] = useState('');
  const dispatch = useDispatch();

  const selectOption = evt => {
    const { innerText } = evt.target;
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
      <SongHeader
        image={uploadedImage || userImageDefault}
        handleChange={handleChangeInput}
      />

      <ActionButtons
        selectOption={selectOption}
        onClick={() => setIsVisualAddList(true)}
        isVisual={isVisualAddList}
      />

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
