import { Formik } from 'formik';
import {
  AlbumFoto,
  SongNameField,
  NameAuthorField,
  AddMP4,
  AddMP3,
  AddVers,
  SongArea,
  NameArea,
  Submit,
} from './SongsForm.styled';
import SongFoto from '../../../image/plus.png';
import { Box } from 'modules/common';

const SongForm = () => {
  return (
    <Formik>
      <form>
        <Box>
          <AlbumFoto src={SongFoto} alt="" />
          <Box>
            <SongNameField />
            <NameAuthorField />
          </Box>
        </Box>
        <AddMP4></AddMP4>
        <AddMP3></AddMP3>
        <AddVers></AddVers>
        <SongArea>
          <NameArea>Verse</NameArea>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </SongArea>
        <Submit></Submit>
      </form>
    </Formik>
  );
};

export default SongForm;
