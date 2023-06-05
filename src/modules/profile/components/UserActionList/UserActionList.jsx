import { nanoid } from 'nanoid';
import {
  UserActionListContainer,
  ActionItem,
  ActionText,
  ActionLink,
} from './UserActionList.styled';
import { RiArrowRightSLine } from 'react-icons/ri';
import { userActionList } from 'constants';
import { useDispatch } from 'react-redux';
import { logout } from 'app/auth/operations';

const UserActionList = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <UserActionListContainer>
      {userActionList.map(({ icon: ActionIcon, text, href, iconColor }) => (
        <ActionItem key={nanoid()}>
          <ActionLink
            to={href}
            onClick={text === 'Log Out' ? handleLogOut : ''}
          >
            <ActionIcon style={{ fill: iconColor }} />
            <ActionText>{text}</ActionText>
            <RiArrowRightSLine />
          </ActionLink>
        </ActionItem>
      ))}
    </UserActionListContainer>
  );
};

export default UserActionList;
