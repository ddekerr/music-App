import { TileListContainer } from './TileList.styled';
import TileItem from './TileItem';
import MalPeople from 'image/amboy.png';
import { nanoid } from 'nanoid';

const tiles = [
  'Filter1',
  'Filter2',
  'Filter3',
  'Filter4',
  'Filter5',
  'Filter6',
];

const TileList = () => {
  return (
    <TileListContainer>
      {tiles.map(tile => (
        <TileItem image={MalPeople} nametile={tile} key={nanoid()} />
      ))}
    </TileListContainer>
  );
};

export default TileList;
