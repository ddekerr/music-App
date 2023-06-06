import {
  BackLink,
  ForThisSong,
  MediaContainer,
  ContainerSong,
  BandName,
  SongName,
  AlbumImage,
  ContainerMP3,
  BorderVerse,
  NamedBox,
  TextBox,
  YouTubeLink,
  RowText,
  TextHeader1,
  TextHeader2,
} from './Song.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { Text } from 'modules/common';
import AlbumFoto from '../../image/room.jpg';
import YoutubeFoto from '../../image/youtu.jpg';
import Zvuk from '../../image/zvuk.jpg';
import { Box, Flex } from 'modules/common';

const Song = () => {
  return (
    <>
      <BackLink>
        <BsArrowLeft style={{ color: '#fff' }} />
        <Text color="white">Go Back</Text>
      </BackLink>

      <Box px={2}>
        <ForThisSong>
          <Flex display="flex">
            <BandName>
              <TextHeader1>Room For More</TextHeader1>
            </BandName>
            <SongName>
              <TextHeader2>День у день</TextHeader2>
            </SongName>
          </Flex>

          <Box ml={2}>
            <AlbumImage src={AlbumFoto} alt="" />
          </Box>
        </ForThisSong>

        <MediaContainer>
          <Box mb={1}>
            <YouTubeLink src={YoutubeFoto} alt="" />
          </Box>
          <Box mb={2}>
            <ContainerMP3 src={Zvuk} />
          </Box>
        </MediaContainer>

        <ContainerSong>
          <NamedBox>ПРИСПІВ1:</NamedBox>
          <BorderVerse>
            <TextBox>
              <RowText>День у день земля сповняється життям Твоїм</RowText>
              <RowText>Bірність і добро тримають світ що Ти створив</RowText>
              <RowText>День у день спасінню Твоєму радіємо</RowText>
              <RowText>Милість і любов вкривають, оживляють знов</RowText>
              <RowText>День у день</RowText>
            </TextBox>
          </BorderVerse>
        </ContainerSong>
      </Box>
    </>
  );
};

export default Song;
