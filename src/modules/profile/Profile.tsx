import Filter from "modules/common/components/Filter/Filter";
import {Header, ProfileInfo, ProfileListContainer} from "./Profile.styled";

function Profile() {
  return (
    <>
      <Header>
        <div className="container">
          <ProfileInfo>

          </ProfileInfo>
        </div>
      </Header>

      <ProfileListContainer>
        <div className="container">
          <div className="proflist"></div>
        </div>
      </ProfileListContainer>
    </>
  );
}

export default Profile;
