import { TileItemContainer, TileLinkName, TileLink } from "./TileList.styled";

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

export default TileItem;
