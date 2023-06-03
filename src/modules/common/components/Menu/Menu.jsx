import { nanoid } from 'nanoid';
import { MenuContainer, MenuList, MenuLink, MenuText } from './Menu.styled';
import { mainMenuList } from 'constants';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList className="container">
        {mainMenuList.map(({ href, text, icon: MenuIcon }) => (
          <li key={nanoid()}>
            <MenuLink to={href}>
              <MenuIcon className="icon" />
              <MenuText>{text}</MenuText>
            </MenuLink>
          </li>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
