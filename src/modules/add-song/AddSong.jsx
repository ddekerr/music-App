import { Suspense } from 'react';
import { Main } from 'modules/common';
import { BackLink } from './AddSong.styled';
import { BsArrowLeft } from 'react-icons/bs';
import SongForm from './components/SongsForm';

const AddSong = () => {
  return (
    <>
      <BackLink>
        <BsArrowLeft />
        <p>Go Back</p>
      </BackLink>

      <Main>
        <SongForm />
      </Main>
    </>
  );
};

export default AddSong;
