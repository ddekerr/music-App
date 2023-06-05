import { useNavigate } from 'react-router-dom';
import { Main } from 'modules/common';
import { BackLink } from './AddSong.styled';
import { BsArrowLeft } from 'react-icons/bs';
import SongForm from './components/SongsForm';
import { Text } from 'modules/common';

const AddSong = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackLink to={navigate(-1)}>
        <BsArrowLeft style={{ color: '#fff' }} />
        <Text color="white">Go Back</Text>
      </BackLink>

      <Main>
        <SongForm />
      </Main>
    </>
  );
};

export default AddSong;
