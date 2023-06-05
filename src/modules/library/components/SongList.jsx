import { nanoid } from 'nanoid';
import SongItem from './SongItem';
import { useSongs } from 'app/hooks';

const SongList = () => {
  const { songs } = useSongs();

  return (
    songs.length !== 0 && (
      <ul>
        {songs.map(({ title, author }) => (
          <SongItem key={nanoid()} title={title} author={author} />
        ))}
      </ul>
    )
  );
};

export default SongList;
