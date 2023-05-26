import Filter from "modules/common/components/Filter/Filter";
import { Header, SearchField } from "./Library.styled";
import SongList from "./components/SongList";
import "./Library.css";

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

      <main>
        <SongList />
      </main>
      <div className="pop-up"></div>
    </>
  );
}

export default Library;
