// import { TitleList } from './Home.styled';
import { Main, Header, Filter } from 'modules/common';
import TileList from './components/TileList';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from 'app/songs/operations';
import { Puff } from 'react-loader-spinner';
import { useSongs } from 'app/hooks';

const Home = () => {
  const dispatch = useDispatch();
  const { songs, isLoading } = useSongs();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <Header>
        {/* <TitleList>Worship Songs</TitleList> */}
        <Filter />
      </Header>

      <Main>
        {isLoading && <Puff />}
        {songs.length > 0 && <TileList songs={songs} />}
      </Main>
    </>
  );
};

export default Home;
