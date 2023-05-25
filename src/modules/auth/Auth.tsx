import "./Auth.css";
import profile from "../../image/pngegg.png";

function Auth() {
  return (
    <>
    <div className="hero">
    
    </div>

    <div className="registration">
        <div className="logo">
          <div className="sumbol"><img src={profile} alt="there should have been a picture but something went wrong, sorry(((" className="picture"/></div>
          <div className="greeting"><p>Time to WORSHIP</p></div>
        </div>
        <ul className="registration__list container">
          <li className="with qlog">click here fore free sing up</li>
          <li className="with">Continue with Google</li>
          <li className="with">Continue with Facebook</li>
          <li className="with">Continue with IOS</li>
          <li className="with qlog">Log in</li>
        </ul>
    </div>
    </>
  );
}

export default Auth;