import {
  BackLink,
  ForThisSong,
  MediaContainer,
  ContainerSong,
  BandName,
  SongName,
  AlbumImage,
  ContainerMP3,
  ContainerMP4,
  BorderVerse,
  NamedBox,
  TextBox,
} from './Song.styled';
import { BsArrowLeft } from 'react-icons/bs';
import { Text } from 'modules/common';
import { useNavigate } from 'react-router-dom';
import AlbumFoto from '../../image/room.jpg';
import { useEffect } from 'react';

const Song = () => {
  return (
    <>
      <BackLink>
        <BsArrowLeft style={{ color: '#fff' }} />
        <Text color="white">Go Back</Text>
      </BackLink>

      <ForThisSong>
        <BandName>Room For More</BandName>
        <SongName>Den y den</SongName>
        <AlbumImage src={AlbumFoto} alt="" />
      </ForThisSong>

      <MediaContainer>
        <ContainerMP4></ContainerMP4>
        <ContainerMP3></ContainerMP3>
      </MediaContainer>

      <ContainerSong>
        <BorderVerse></BorderVerse>
        <NamedBox></NamedBox>
        <TextBox></TextBox>
      </ContainerSong>
    </>
  );
};

export default Song;
