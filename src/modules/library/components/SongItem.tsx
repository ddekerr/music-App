import { Song } from "./SongList.styled";
import { FC } from "react";

interface ISong {
  title: string;
  author: string;
}

const SongItem: FC<ISong> = ({ title, author }) => {
  return (
    <Song className="songs__item">
      <div className="song">
        <div className="song__title">{title}</div>
        <div className="song__author">{author}</div>
      </div>
      <div className="action">...</div>
    </Song>
  );
};

export default SongItem;
