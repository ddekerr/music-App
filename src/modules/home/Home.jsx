// import { TitleList } from './Home.styled';
import { Main, Header, Filter } from 'modules/common';
import TileList from './components/TileList';

const Home = () => {
  return (
    <>
      <Header>
        {/* <TitleList>Worship Songs</TitleList> */}
        <Filter />
      </Header>

      <Main>
        <TileList />
      </Main>
    </>
  );
};

export default Home;
