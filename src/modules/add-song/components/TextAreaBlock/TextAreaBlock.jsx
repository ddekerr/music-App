import { TextArea } from './TextAreaBlock.styled';
import { Box } from 'modules/common';

export const TextAreaBlock = ({
  index,
  handleChange,
  handleFocus,
  handleBlur,
  block,
}) => {
  return (
    <Box>
      <TextArea
        name={block.block_title}
        value={block.block_text}
        onChange={evt => handleChange(index, evt)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={true}
      ></TextArea>
    </Box>
  );
};

export default TextAreaBlock;
