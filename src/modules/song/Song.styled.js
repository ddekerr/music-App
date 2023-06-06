import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

// kirikuturasamanitarybines
export const ForThisSong = styled.div`
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const BandName = styled.div`
  font-size: 15px;
`;

export const TextHeader1 = styled.p`
  text-align: end;
`;

export const SongName = styled.div`
  font-size: 35px;
`;

export const TextHeader2 = styled.p``;

export const AlbumImage = styled.img`
  border-radius: 300px;
  height: 70px;
  width: 70px;
`;

// kirikuturasamanitarybines
export const MediaContainer = styled.div``;

export const YouTubeLink = styled.img``;

export const ContainerMP3 = styled.img`
  height: 30px;
  width: 100%;
`;

// kirikuturasamanitarybines
export const ContainerSong = styled.div`
  color: white;
`;

export const BorderVerse = styled.div`
  border: solid white;
`;

export const NamedBox = styled.b`
  position: relative;
  top: 10px; left: 10px;
  font-size: 16px;
  background-color: #51730d;
  border-radius: 300px;
  padding: 2px 5px;
  /* text-decoration: underline overline; */
`;

export const TextBox = styled.div`
  padding: 10px 5px;
  padding-top: 15px;
`;

export const RowText = styled.p`
  font-size: 14px;
`;
