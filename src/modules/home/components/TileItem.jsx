import PropTypes from 'prop-types';
import { TileItemContainer, TileLinkName, TileLink } from './TileList.styled';

const TileItem = ({ image, nametile }) => {
  return (
    <TileItemContainer>
      <TileLink to="#">
        <img src={image} alt="foto" />
        <TileLinkName>{nametile}</TileLinkName>
      </TileLink>
    </TileItemContainer>
  );
};

TileItem.propTypes = {
  image: PropTypes.string.isRequired,
  nametile: PropTypes.string.isRequired,
};

export default TileItem;
