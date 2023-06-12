import { AddButton } from './ActionButtons.styled';
import { Box, Text } from 'modules/common';
import { nanoid } from 'nanoid';
import { partOfSongList } from 'constants';

const ActionButtons = ({ selectOption, onClick, isVisual }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <AddButton type="button">Add MP4</AddButton>
      <AddButton type="button">Add MP3</AddButton>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        position="relative"
      >
        <Text color="white" style={{ cursor: 'pointer' }} onClick={onClick}>
          Add Verse
        </Text>
        {/* <IoMdArrowDropdown style={{fill: "#fff"}} /> */}
        <Box
          as="ul"
          position="absolute"
          className={isVisual ? '' : 'visually-hidden'}
        >
          {partOfSongList.map(part => (
            <li key={nanoid()}>
              <button
                as="button"
                type="button"
                name={part}
                onClick={selectOption}
              >
                {part}
              </button>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ActionButtons;
