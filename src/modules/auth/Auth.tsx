import "./Auth.css";
import profile from "../../image/pngegg.png";
import fonim from "../../image/555.jpg";


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
          <li className="with qlog"> <a href="#">click here fore free sing up</a></li>
          <li className="with"> <a href="#">Continue with Google</a></li>
          <li className="with"> <a href="#">Continue with Facebook</a></li>
          <li className="with"> <a href="#">Continue with IOS</a></li>
          <li className="with qlog"> <a href="#">Log in</a></li>
        </ul>
    </div>
    </>
  );
}

export default Auth;
