import { nanoid } from 'nanoid';
import { MenuContainer, MenuList, MenuLink, MenuText, LiPadding } from './Menu.styled';
import { mainMenuList } from 'constants';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuList className="container">
        {mainMenuList.map(({ href, text, icon: MenuIcon }) => (
          <LiPadding key={nanoid()}>
            <MenuLink to={href}>
              <MenuIcon className="icon" />
              <MenuText>{text}</MenuText>
            </MenuLink>
          </LiPadding>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
