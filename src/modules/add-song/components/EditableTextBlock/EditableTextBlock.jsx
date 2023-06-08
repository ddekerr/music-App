import { Box, Text } from 'modules/common';
import { ChooseChord } from './EditableTextBlock.styled';
import { nanoid } from 'nanoid';

export const EditableTextBlock = ({ field, handleClick }) => {
  return (
    <>
      <Text>{field.name}</Text>
      <a href="#" name={field.name} onClick={handleClick}>
        {field.value.split('\n').map(string => (
          <Box key={nanoid()}>
            <ChooseChord type='button'>+</ChooseChord>
            <Text color="white">{string}</Text>
          </Box>
        ))}
      </a>
    </>
  );
};

export default EditableTextBlock;

/* <ChooseChord>+</ChooseChord>
        <Text color="white">Втомлена від боротьби</Text>

        <ChooseChord>+</ChooseChord>
        <Text color="white">Зітхаємо у марноті</Text>

        <ChooseChord>+</ChooseChord>
        <Text color="white">Бо втратили ми Твій дотик</Text> */
