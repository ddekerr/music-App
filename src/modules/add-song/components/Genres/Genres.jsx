import { Box } from 'modules/common';
import { genresList } from 'constants';
import { GenreInput } from './Genres.styled';
import { nanoid } from 'nanoid';

const Genres = ({ handleCheckbox, checkedGenres }) => {
  return (
    <Box display="flex" overflowX="auto" height="50px" style={{ gap: '1em' }} mt={3}>
      {genresList.map(genre => (
        <Box key={nanoid()}>
          <GenreInput
            className="visually-hidden"
            type="checkbox"
            name="genres"
            id={genre}
            value={genre}
            onChange={handleCheckbox}
            checked={checkedGenres.includes(genre) ? true : false}
          />
          <label htmlFor={genre}>{genre}</label>
        </Box>
      ))}
    </Box>
  );
};

export default Genres;
