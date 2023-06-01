import PropTypes from 'prop-types';
import { TileItemContainer, TileLinkName, TileLink } from './TileList.styled';

const TileItem = ({ image, song: { _id, title, author } }) => {
  return (
    <TileItemContainer>
      <TileLink to={_id}>
        <img src={image} alt="foto" />
        <TileLinkName>{title}</TileLinkName>
      </TileLink>
    </TileItemContainer>
  );
};

TileItem.propTypes = {
  image: PropTypes.string.isRequired,
  song: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

export default TileItem;
