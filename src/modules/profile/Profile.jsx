import { AvatarFoto, UserName } from './Profile.styled';
import { Main, Header } from 'modules/common';
import { UserActionList } from './components';

import UserFotoLink from '../../image/mat.jpg';

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
