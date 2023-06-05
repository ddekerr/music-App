import { AvatarFoto, UserName } from './Profile.styled';
import { Main, Header, Box } from 'modules/common';
import { UserActionList } from './components';

import UserFotoLink from '../../image/mat.jpg';

import { useAuth } from 'app/hooks';

const Profile = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <Header>
        <Box display="flex" alignItems="center">
          <AvatarFoto src={UserFotoLink} alt="UserFoto" />
          <UserName>{isLoggedIn ? user.name : 'Martin Froibergh'}</UserName>
        </Box>
      </Header>

      <Main>
        <UserActionList />
      </Main>
    </>
  );
};

export default Profile;
