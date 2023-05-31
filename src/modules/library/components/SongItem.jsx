import PropTypes from 'prop-types';
import {
  SongItemContainer,
  SongTitle,
  SongAuthor,
  ActionButton,
} from './SongList.styled';
import { BsThreeDotsVertical } from 'react-icons/bs';

const SongItem = ({ title, author }) => {
  return (
    <SongItemContainer>
      <div>
        <SongTitle>{title}</SongTitle>
        <SongAuthor>{author}</SongAuthor>
      </div>
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
