import { nanoid } from 'nanoid';
import SongItem from './SongItem';
import { useSongs } from 'app/hooks';

const SongList = () => {
  const { songs } = useSongs();
  console.log(songs[0]._id);
  return (
    songs.length !== 0 && (
      <ul>
        {songs.map(song => (
          <SongItem key={nanoid()} song={song} />
        ))}
      </ul>
    )
  );
};

export default SongList;
