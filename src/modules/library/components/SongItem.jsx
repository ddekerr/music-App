import PropTypes from 'prop-types';
import { SongItemContainer, ActionButton } from './SongList.styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Text, Box } from 'modules/common';
import { NavLink } from 'react-router-dom';

const SongItem = ({ song: { title, author, _id } }) => {
  return (
    <SongItemContainer>
      <NavLink to={`${_id}`}>
        <Text fontSize={1} fontWeight={1} lineHeight={0}>
          {title}
        </Text>
        <Text fontSize={0} fontWeight={0} lineHeight={0}>
          {author}
        </Text>
      </NavLink>
      <ActionButton>
        <BsThreeDotsVertical />
      </ActionButton>
    </SongItemContainer>
  );
};

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SongItem;
