import PropTypes from 'prop-types';
import { TileListContainer } from './TileList.styled';
import TileItem from './TileItem';
import MalPeople from 'image/amboy.png';
import { nanoid } from 'nanoid';


const TileList = ({ songs }) => {
  return (
    <TileListContainer>
      {songs.map(song => (
        <TileItem image={MalPeople} song={song} key={nanoid()} />
      ))}
    </TileListContainer>
  );
};

TileList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
};

export default TileList;
