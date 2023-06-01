import { SearchField } from './Library.styled';
import { Main, Header, Filter } from 'modules/common';
import SongList from './components/SongList';

function Library() {
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
        <SongList />
      </Main>
    </>
  );
}

export default Library;
