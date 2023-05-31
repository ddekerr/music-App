// import { Link } from "react-router-dom";
import Filter from 'modules/common/components/Filter/Filter';
import { TitleList } from './Home.styled';
import TileList from './components/TileList';
import Header from 'modules/common/components/Layout/Header';
import Main from 'modules/common/components/Layout/Main';

const Home = () => {
  return (
    <>
      <Header>
        <TitleList>Worship Songs</TitleList>
        <Filter />
      </Header>

      <Main>
        <TileList />
      </Main>
    </>
  );
};

export default Home;
