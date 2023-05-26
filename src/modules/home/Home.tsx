import "./Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    



      <div>Home</div>
      <Link to={"/library"}>Library</Link>
      <Link to={"/auth"}>Auth</Link>
    </>
  );
}

export default Home;
