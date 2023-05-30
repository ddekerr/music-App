import { MenuContainer, MenuList, MenuLink, MenuText } from "./Menu.styled";
import { HiHome, HiUser } from "react-icons/hi";
import { VscLibrary } from "react-icons/vsc";

function Menu() {
  return (
    <MenuContainer>
      <MenuList className="container">
        <li>
          <MenuLink to="/">
            <HiHome className="icon" />
            <MenuText>Home</MenuText>
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/library">
            <VscLibrary className="icon" />
            <MenuText>Library</MenuText>
          </MenuLink>
        </li>
        <li>
          <MenuLink to="#">
            <HiUser className="icon" />
            <MenuText>Profile</MenuText>
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/auth">Auth</MenuLink>
        </li>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;