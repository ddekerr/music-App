import { Box, Text } from 'modules/common';
import { ChooseChord } from './EditableTextBlock.styled';
import { nanoid } from 'nanoid';

export const EditableTextBlock = () => {
  return (
    <a href="#">
      <ChooseChord>+</ChooseChord>
      <Text color="white"></Text>
    </a>
  );
};

export default EditableTextBlock;

/* <ChooseChord>+</ChooseChord>
        <Text color="white">Втомлена від боротьби</Text>

        <ChooseChord>+</ChooseChord>
        <Text color="white">Зітхаємо у марноті</Text>

        <ChooseChord>+</ChooseChord>
        <Text color="white">Бо втратили ми Твій дотик</Text> */
