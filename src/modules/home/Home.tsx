import "./Home.css";
import { Link } from "react-router-dom";
import Filter from "modules/common/components/Filter/Filter";



function Home() {
  return (
    <>
    <header className="header">
      <p className="texthed">Worship Songs</p>
    </header>

    <Filter></Filter>

    <div></div>
    </>
  );
}

export default Home;
