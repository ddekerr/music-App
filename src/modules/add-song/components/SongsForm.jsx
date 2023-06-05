import { Formik } from 'formik';
import { useState } from 'react';
import {
  AddSongForm,
  UserImageUploadInput,
  UserImageUploadLabel,
  UserImageUploadContainer,
  InputField,
  AddButton,
  AddVers,
  SongArea,
  NameArea,
  Submit,
  SongText,
  AddChords,
  TransformText,
  ChoiceChord,
} from './SongsForm.styled';
import { Box } from 'modules/common';
import userImageDefault from '../../../image/add-image.png';

const SongForm = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleChange = evt => {
    setUploadedImage(evt.target.files[0]);
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
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <AddButton type="button">Add MP4</AddButton>
          <AddButton type="button">Add MP3</AddButton>
          <AddVers>
            <option value="verse"></option>
            <option value="chorus"></option>
            <option value="bridge"></option>
          </AddVers>
        </Box>

        {/* TEXT BLOCK */}
        <SongArea>
          <NameArea>Verse</NameArea>
          <SongText name="" id="" as="textarea"></SongText>
          {/* transform area in the text */}
          <AddChords>
            <ChoiceChord>+</ChoiceChord>
          </AddChords>
          <TransformText>
            <p>Вся земля cхилилася</p>
          </TransformText>
          <AddChords>
            <ChoiceChord>+</ChoiceChord>
          </AddChords>
          <TransformText>
            <p>Втомлена від боротьби</p>
          </TransformText>
          <AddChords>
            <ChoiceChord>+</ChoiceChord>
          </AddChords>
          <TransformText>
            <p>Зітхаємо у марноті</p>
          </TransformText>
          <AddChords>
            <ChoiceChord>+</ChoiceChord>
          </AddChords>
          <TransformText>
            <p>Бо втратили ми Твій дотик</p>
          </TransformText>
        </SongArea>

        <Box display="flex" justifyContent="flex-end">
          <Submit>Save</Submit>
        </Box>
      </AddSongForm>
    </Formik>
  );
};

export default SongForm;
