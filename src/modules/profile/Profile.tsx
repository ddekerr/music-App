import Filter from "modules/common/components/Filter/Filter";
import {Header, ProfileListContainer, FilterButton} from "./Profile.styled";
import UserFotoLink from "../../image/amboy.png";
import UserCab from "./components/UserCab";

function Profile() {
  return (
    <>
      <Header>
        <div className="container">
          <img src={UserFotoLink} alt="UserFoto"/>
          <h1>Martin Froibergh</h1>
        </div>
      </Header>

      <ProfileListContainer>
        <div className="container">
          <UserCab />
        </div>
      </ProfileListContainer>
    </>
  );
}

export default Profile;
