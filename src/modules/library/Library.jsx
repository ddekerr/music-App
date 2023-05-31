import Filter from 'modules/common/components/Filter/Filter';
import { SearchField } from './Library.styled';
import SongList from './components/SongList';
import Header from 'modules/common/components/Layout/Header';
import Main from 'modules/common/components/Layout/Main';

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
      <div className="pop-up"></div>
    </>
  );
}

export default Library;
