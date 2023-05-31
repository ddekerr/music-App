import { nanoid } from 'nanoid';
import {
  UserActionListContainer,
  ActionItem,
  ActionText,
  ActionLink,
} from './UserActionList.styled';
import { RiArrowRightSLine } from 'react-icons/ri';
import { userActionList } from 'constants/userActionList';

const UserActionList = () => {
  return (
    <UserActionListContainer>
      {userActionList.map(({ icon: ActionIcon, text, href }) => (
        <ActionItem key={nanoid()}>
          <ActionLink to={href}>
            <ActionIcon />
            <ActionText>{text}</ActionText>
            <RiArrowRightSLine />
          </ActionLink>
        </ActionItem>
      ))}
    </UserActionListContainer>
  );
};

export default UserActionList;
