import {
  SongItemContainer,
  SongTitle,
  SongAuthor,
  ActionButton,
} from "./SongList.styled";
import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ISong {
  title: string;
  author: string;
}

const SongItem: FC<ISong> = ({ title, author }) => {
  return (
    <SongItemContainer>
      <div>
        <SongTitle>{title}</SongTitle>
        <SongAuthor>{author}</SongAuthor>
      </div>
      <ActionButton>
        <BsThreeDotsVertical />
      </ActionButton>
    </SongItemContainer>
  );
};

export default SongItem;
