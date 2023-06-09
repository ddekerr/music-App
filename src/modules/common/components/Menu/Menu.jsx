import { nanoid } from 'nanoid';
import { MenuContainer, MenuList, MenuLink, LiPadding } from './Menu.styled';
import { mainMenuList } from 'constants';
import { Text } from 'modules/common';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        {mainMenuList.map(({ href, text, icon: MenuIcon }) => (
          <LiPadding key={nanoid()}>
            <MenuLink to={href}>
              <MenuIcon className="icon" />
              <Text fontSize={{ _: 0, sm: 2 }} lineGeight={{ _: 0, sm: 1 }}>
                {text}
              </Text>
            </MenuLink>
          </LiPadding>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
