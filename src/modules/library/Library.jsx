import { SearchField } from './Library.styled';
import { Main, Header, Filter } from 'modules/common';
import SongList from './components/SongList';

import { Puff } from 'react-loader-spinner';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSongs } from 'app/hooks';
import { getAll } from 'app/songs/operations';

function Library() {
  const dispatch = useDispatch();
  const { songs, isLoading } = useSongs();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  return (
    <>
      <Header>
        <SearchField
          type="search"
          name="search"
          id="search"
          placeholder="Search music"
        />
        <Filter />
      </Header>

      <Main>
        {isLoading && <Puff />}
        {songs.length !== 0 && <SongList />}
      </Main>
    </>
  );
}

export default Library;
