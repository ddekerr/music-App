import { Box, Text } from 'modules/common';
// import { ChooseChord } from './EditableTextBlock.styled';
import { nanoid } from 'nanoid';

export const EditableTextBlock = ({ block, handleClick }) => {
  return (
    <>
      {block.block_text.split('\n').map(string => (
        <Box key={nanoid()}>
          {/* <ChooseChord type="button">+</ChooseChord> */}
          <pre>
            <Text
              color="white"
              data-name={block.block_title}
              onClick={handleClick}
            >
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
