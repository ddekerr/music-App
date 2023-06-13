import { AddButton, ButtonList, AddButtonOption } from './ActionButtons.styled';
import { Box } from 'modules/common';
import { nanoid } from 'nanoid';
import { partOfSongList } from 'constants';

const ActionButtons = ({ selectOption, onClick, isVisual }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      position="relative"
    >
      <AddButton type="button">Add MP4</AddButton>
      <AddButton type="button">Add MP3</AddButton>

      <AddButton onClick={onClick}>Add Verse</AddButton>
      {/* <IoMdArrowDropdown style={{fill: "#fff"}} /> */}
      <ButtonList className={isVisual ? '' : 'visually-hidden'}>
        {partOfSongList.map(part => (
          <li key={nanoid()}>
            <AddButtonOption type="button" name={part} onClick={selectOption}>
              {part}
            </AddButtonOption>
          </li>
        ))}
      </ButtonList>
    </Box>
  );
};

export default ActionButtons;
