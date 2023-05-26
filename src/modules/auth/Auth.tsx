import "./Auth.css";
import profile from "../../image/pngegg.png";
import fonim from "../../image/555.jpg";
import { Registration } from "./Auth.styled";

function Auth() {
  return (
    <>
      <div className="hero"></div>
        <p>dima dima</p>
      <Registration>
        <div className="logo">
          <img src={profile} alt="cross" className="picture" />
          <div className="greeting">
            <p>Time to WORSHIP</p>
          </div>
        </div>
        <ul className="registration__list container">
          <li className="with qlog">
            <a href="#">click here fore free sing up</a>
          </li>
          <li className="with">
            <a href="#">Continue with Google</a>
          </li>
          <li className="with">
            <a href="#">Continue with Facebook</a>
          </li>
          <li className="with">
            <a href="#">Continue with IOS</a>
          </li>
          <li className="with qlog">
            <a href="#">Log in</a>
          </li>
        </ul>
      </Registration>
    </>
  );
}

export default Auth;
