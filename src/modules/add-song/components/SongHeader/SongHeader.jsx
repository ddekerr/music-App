import {
  UserImageUploadLabel,
  InputField,
  FieldsGroup,
} from './SongHeader.styled';
import { Box } from 'modules/common';
import { GrAddCircle } from 'react-icons/gr';

const HeaderSong = ({ image, handleChange }) => {
  return (
    <Box
      display="flex"
      // flexWrap={{ _: 'wrap', xs: 'nowrap' }}
      flexDirection={{ _: 'column', xs: 'row' }}
      justifyContent="space-between"
      mb={2}
    >
      <UserImageUploadLabel htmlFor="file">
        {/* <UserImageUploadContainer src={uploadedImage || userImageDefault} /> */}
        {/* <UserImageUploadContainer src={image} /> */}
        <GrAddCircle style={{ fontSize: '6em' }} />
        <input
          className="visually-hidden"
          type="file"
          name="file"
          id="file"
          // onChange={handleChangeImg}
        />
      </UserImageUploadLabel>
      <FieldsGroup>
        <InputField
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          placeholder="Enter the title of song"
        />

        <InputField
          type="text"
          name="author"
          id="author"
          onChange={handleChange}
          placeholder="Enter the author of song"
        />
      </FieldsGroup>
    </Box>
  );
};

export default HeaderSong;
