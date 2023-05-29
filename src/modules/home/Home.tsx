import "./Home.css";
import { Link } from "react-router-dom";
import Filter from "modules/common/components/Filter/Filter";
import { Header, TitleList, TileContainer } from "./Home.styled";
import TileList from "./components/TileList";


function Home() {
  return (
    <>
    <Header>
      <div className="container">
        <TitleList>Worship Songs</TitleList>
        <Filter/>
      </div>
        
    </Header>

    <TileContainer>
      <TileList/>
    </TileContainer>
    </>
  );
}

export default Home;
