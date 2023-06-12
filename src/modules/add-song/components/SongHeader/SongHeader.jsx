import {
  UserImageUploadLabel,
  UserImageUploadContainer,
  UserImageUploadInput,
  InputField,
} from './SongHeader.styled';
import { Box } from 'modules/common';

const HeaderSong = ({ image, handleChange }) => {
  return (
    <Box display="flex">
      <UserImageUploadLabel htmlFor="file">
        {/* <UserImageUploadContainer src={uploadedImage || userImageDefault} /> */}
        <UserImageUploadContainer src={image} />
        <UserImageUploadInput
          type="file"
          name="file"
          id="file"
          // onChange={handleChangeImg}
        />
      </UserImageUploadLabel>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        width={0}
      >
        <InputField
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="author"
          id="author"
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default HeaderSong;
