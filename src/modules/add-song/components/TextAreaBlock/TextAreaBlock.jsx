import { TextAreaContainer } from './TextAreaBlock.styled';
import { Box, Text } from 'modules/common';

export const TextAreaBlock = () => {
  return (
    <Box mt={2}>
      <Text color="white">Text</Text>
      <TextAreaContainer as="textarea" />
      <a href="#">Add</a>
    </Box>
  );
};

export default TextAreaBlock;
