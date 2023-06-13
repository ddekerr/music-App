import { nanoid } from 'nanoid';
import { MenuContainer, MenuList, MenuLink, MenuItem } from './Menu.styled';
import { mainMenuList } from 'constants';
import { Text } from 'modules/common';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList>
        {mainMenuList.map(({ href, text, icon: MenuIcon }) => (
          <MenuItem key={nanoid()}>
            <MenuLink to={href}>
              <MenuIcon className="icon" />
              <Text fontSize={{ _: 'md', sm: 'lg' }} lineHeight="normal">
                {text}
              </Text>
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
