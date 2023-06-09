import { Box, Text } from 'modules/common';
// import { ChooseChord } from './EditableTextBlock.styled';
import { nanoid } from 'nanoid';

export const EditableTextBlock = ({ field, handleClick }) => {
  return (
    <>
      {field.value.split('\n').map(string => (
        <Box key={nanoid()}>
          {/* <ChooseChord type="button">+</ChooseChord> */}
          <pre>
            <Text color="white" data-name={field.name} onClick={handleClick}>
              {string}
            </Text>
          </pre>
        </Box>
      ))}
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
