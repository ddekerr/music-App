import {
  SongItemContainer,
  SongTitle,
  SongAuthor,
  ActionButton,
} from "./SongList.styled";
import { BsThreeDotsVertical } from "react-icons/bs";

const SongItem = ({ title, author }) => {
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
