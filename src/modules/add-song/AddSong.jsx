import { Suspense } from 'react';
import { Main } from 'modules/common';
import { BackLink } from './AddSong.styled';
import { BsArrowLeft } from 'react-icons/bs';
import SongForm from './components/SongsForm';

const AddSong = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BackLink>
        <BsArrowLeft />
        <p>Go Back</p>
      </BackLink>

      <Main>
        <SongForm />
      </Main>
    </Suspense>
  );
};

export default AddSong;
