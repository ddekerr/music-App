import { TextArea } from './TextAreaBlock.styled';
import { Box, Text } from 'modules/common';

export const TextAreaBlock = ({
  index,
  handleChange,
  handleFocus,
  handleBlur,
  field,
}) => {
  return (
    <Box mt={2}>
      <Text color="white">{field.name.toUpperCase()}</Text>
      <TextArea
        name={field.name}
        value={field.value}
        onChange={evt => handleChange(index, evt)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></TextArea>
      <a href="#">Add</a>
    </Box>
  );
};

export default TextAreaBlock;
