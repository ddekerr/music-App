import Filter from "modules/common/components/Filter/Filter";
import { SongContainer, Header, SearchField } from "./Library.styled";
import SongList from "./components/SongList";

function Library() {
  return (
    <>
      <Header>
        <div className="container">
          <SearchField
            type="search"
            name="search"
            id="search"
            placeholder="Search music"
          />
          <Filter />
        </div>
      </Header>

      <SongContainer>
        <SongList />
      </SongContainer>
      <div className="pop-up"></div>
    </>
  );
}

export default Library;
