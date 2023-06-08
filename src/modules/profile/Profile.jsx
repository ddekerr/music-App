import { AvatarFoto, UserName, MenuBurger } from './Profile.styled';
import { Main, Header, Box } from 'modules/common';
import { UserActionList } from './components';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import UserFotoLink from '../../image/mat.jpg';

import { useAuth } from 'app/hooks';
import { position } from 'styled-system';

const Profile = () => {
  const { isLoggedIn, user } = useAuth();

  const [isShowMenu, setIsShowMenu] = useState(
    document.documentElement.clientWidth < 480 ? false : true
  );

  const togleMenu = () => setIsShowMenu(!isShowMenu);
  return (
    <>
      <Header>
        <Box
          display="flex"
          alignItems="center"
          style={{ position: 'relative' }}
        >
          <AvatarFoto src={UserFotoLink} alt="UserFoto" />
          <UserName>{isLoggedIn ? user.name : 'Martin Froibergh'}</UserName>

          <MenuBurger onClick={togleMenu}>
            <GiHamburgerMenu />
          </MenuBurger>
          {isShowMenu && <UserActionList />}
        </Box>
      </Header>

      <Main></Main>
    </>
  );
};

export default Profile;
