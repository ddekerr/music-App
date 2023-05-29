import { nanoid } from "nanoid";
import SongItem from "./SongItem";

const songList = [
  { title: "День у день", author: "Room for more" },
  { title: "Це наш Бог", author: "Room for more" },
  { title: "Я переможу", author: "D. Worship" },
  { title: "Вільний", author: "Room for more" },
  { title: "День у день", author: "Room for more" },
  { title: "Це наш Бог", author: "Room for more" },
  { title: "Я переможу", author: "D. Worship" },
  { title: "Вільний", author: "Room for more" },
];

const SongList = () => {
  return (
    <ul className="container">
      {songList.map(({ title, author }) => (
        <SongItem key={nanoid()} title={title} author={author} />
      ))}
    </ul>
  );
};

export default SongList;
