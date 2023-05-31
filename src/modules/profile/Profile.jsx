// import Filter from "modules/common/components/Filter/Filter";
import { AvatarFoto, UserName } from './Profile.styled';
import UserFotoLink from '../../image/mat.jpg';
import UserActionList from './components/UserActionList';
import Header from 'modules/common/components/Layout/Header';
import Main from 'modules/common/components/Layout/Main';

const Profile = () => {
  return (
    <>
      <Header>
        <AvatarFoto src={UserFotoLink} alt="UserFoto" />
        <UserName>Martin Froibergh</UserName>
      </Header>

      <Main>
        <UserActionList />
      </Main>
    </>
  );
};

export default Profile;
