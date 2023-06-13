import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from 'app/songs/operations';

import { AddSongForm, Submit, Plug, TextBLockTitle } from './SongForm.styled';
import { Box } from 'modules/common';
import userImageDefault from 'image/add-image.png';
import {
  EditableTextBlock,
  TextAreaBlock,
  SongHeader,
  ActionButtons,
  Genres,
} from '..';

const initialValues = {
  is_public: false,
  is_moderate: false,
  title: '',
  author: '',
  genres: [],
  // path_to_song: '',
  // path_to_video: '',
  // path_to_img: '',
  text: [],
  chords: [],
};

const SongForm = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isVisualAddList, setIsVisualAddList] = useState(false);
  const [fields, setFields] = useState(initialValues);
  const [focusField, setFocusField] = useState('');
  const dispatch = useDispatch();

  // Clicking Action buttons option event
  const selectOption = evt => {
    const { innerText } = evt.target;

    const includes = fields.text.reduce(
      (result, block) =>
        block.block_title.includes(innerText) ? (result += 1) : result,
      1
    );

    let data = {
      ...fields,
      text: [
        ...fields.text,
        { block_title: innerText + includes, block_text: '' },
      ],
    };
    setFields(data);
    setIsVisualAddList(false);
  };

  // Change all inputs event
  const handleChangeInput = evt => {
    const { name, value } = evt.target;
    let data = { ...fields };
    data[name] = value;
    setFields(data);
  };

  // Change all textareas event
  const handleChangeTextArea = (index, evt) => {
    const { value } = evt.target;
    let data = { ...fields };
    data.text[index].block_text = value;
    setFields(data);
  };

  // Click on textarea event
  const handleClick = evt => {
    evt.preventDefault();
    setFocusField(evt.currentTarget.dataset.name);
  };

  //Submit form
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addSong(fields));
  };

  // Checkbox change event
  const handleCheckbox = evt => {
    const { name, value, checked } = evt.target;
    let data = { ...fields };

    if (checked && !data[name].includes(value)) {
      data[name].push(value);
    }

    if (!checked && data[name].includes(value)) {
      data[name].splice(value, 1);
    }

    setFields(data);
  };

  // Delete block of text event
  const handleDelete = evt => {
    evt.preventDefault();
    const { index } = evt.target.dataset;
    let textFields = [...fields.text];
    textFields.splice(index, 1);
    setFields({ ...fields, text: textFields });
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

      <Genres handleCheckbox={handleCheckbox} checkedGenres={fields.genres} />

      {fields.text.length === 0 && <Plug>Please add your first verse...</Plug>}

      {/* TEXT BLOCKS */}
      {fields.text.map((block, index) => (
        <Box key={index} mt={2} position="relative">
          <TextBLockTitle>
            <span className="front">{block.block_title.toUpperCase()}</span>
            <span className="back" data-index={index} onClick={handleDelete}>
              DELETE
            </span>
          </TextBLockTitle>
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

      {fields.text.length !== 0 && (
        <Box display="flex" justifyContent="flex-end">
          <Submit
            type="submit"
            disabled={
              fields.text.every(e => e.block_text === '') || fields.title === ''
                ? true
                : false
            }
          >
            Save
          </Submit>
        </Box>
      )}
    </AddSongForm>
  );
};

export default SongForm;
