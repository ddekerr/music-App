import { Text, Box } from 'modules/common';
import { ChooseChord, TextBlock } from './EditableTextBlock.styled';
import { nanoid } from 'nanoid';

export const EditableTextBlock = ({ block, handleClick }) => {
  return (
    <TextBlock>
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
    </TextBlock>
  );
};

export default EditableTextBlock;
