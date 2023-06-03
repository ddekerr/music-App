import { useSelector } from 'react-redux';
import { getSongs, getIsLoading } from 'app/songs/selectors';

const useSongs = () => {
  const songs = useSelector(getSongs);
  const isLoading = useSelector(getIsLoading);

  return {
    songs,
    isLoading,
  };
};

export default useSongs;
