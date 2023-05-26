import { MenuContainer, MenuList, MenuLink } from "./Menu.styled";
import { HiHome, HiUser } from "react-icons/hi";
import { VscLibrary } from "react-icons/vsc";

function Menu() {
  return (
    <MenuContainer>
      <MenuList className="container">
        <li>
          <HiHome className="icon" />
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <VscLibrary className="icon" />
          <MenuLink to="/library">Library</MenuLink>
        </li>
        <li>
          <HiUser className="icon" />
          <MenuLink to="#">Profile</MenuLink>
        </li>
        <li>
          <MenuLink to="/auth">Auth</MenuLink>
        </li>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
