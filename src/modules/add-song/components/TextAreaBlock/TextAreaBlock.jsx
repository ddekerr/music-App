import { TextAreaContainer } from './TextAreaBlock.styled';
import { Box, Text } from 'modules/common';

export const TextAreaBlock = ({ handleBlur, name }) => {
  return (
    <Box mt={2}>
      <Text color="white">Verse</Text>
      <TextAreaContainer name={name} id="" as="textarea" onBlur={handleBlur} />
    </Box>
  );
};

export default TextAreaBlock;
