import "./Auth.css";
import profile from "../../image/pngegg.png";

function Auth() {
  return (
    <>
      <div className="container_hight">
        <img src={profile} alt="oops" className="znak" />
      </div>
      <div className="container_low"></div>
    </>
  );
}

export default Auth;