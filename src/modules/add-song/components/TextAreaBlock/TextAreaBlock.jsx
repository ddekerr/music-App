import { TextArea } from './TextAreaBlock.styled';
import { Box } from 'modules/common';

export const TextAreaBlock = ({
  index,
  handleChange,
  handleFocus,
  handleBlur,
  field,
}) => {
  return (
    <Box>
      <TextArea
        name={field.name}
        value={field.value}
        onChange={evt => handleChange(index, evt)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={true}
      ></TextArea>
    </Box>
  );
};

export default TextAreaBlock;
