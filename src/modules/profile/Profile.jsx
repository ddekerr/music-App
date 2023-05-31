// import Filter from "modules/common/components/Filter/Filter";
import {
  Header,
  ProfileListContainer,
  AvatarFoto,
  UserName,
} from "./Profile.styled";
import UserFotoLink from "../../image/mat.jpg";
import UserCab from "./components/UserCab";

function Profile() {
  return (
    <>
      <Header>
        <div className="container">
          <AvatarFoto src={UserFotoLink} alt="UserFoto" />
          <UserName>Martin Froibergh</UserName>
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
