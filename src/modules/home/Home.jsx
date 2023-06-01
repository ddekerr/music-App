// import { TitleList } from './Home.styled';
import { Main, Header, Filter } from 'modules/common';
import TileList from './components/TileList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from 'app/songs/operations';
import { getSongs, getIsLoading } from 'app/songs/selectors';
import { Puff } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector(getSongs);
  const isLoading = useSelector(getIsLoading);

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
