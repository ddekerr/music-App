import { AvatarFoto, UserName, FatherBoxHead } from './Profile.styled';
import { Main, Header } from 'modules/common';
import { UserActionList } from './components';

import UserFotoLink from '../../image/mat.jpg';

const Profile = () => {
  return (
    <>
      <Header>
        <FatherBoxHead>
        <AvatarFoto src={UserFotoLink} alt="UserFoto" />
        <UserName>Martin Froibergh</UserName>
        </FatherBoxHead>
      </Header>

      <Main>
        <UserActionList />
      </Main>
    </>
  );
};

export default Profile;
