import { nanoid } from "nanoid";
import SongItem from "./SongItem";

const songList = [
  { id: 1, title: "День у день", author: "Room for more" },
  { id: 2, title: "Це наш Бог", author: "Room for more" },
  { id: 3, title: "Я переможу", author: "D. Worship" },
  { id: 4, title: "Вільний", author: "Room for more" },
  { id: 5, title: "День у день", author: "Room for more" },
  { id: 6, title: "Це наш Бог", author: "Room for more" },
  { id: 7, title: "Я переможу", author: "D. Worship" },
  { id: 8, title: "Вільний", author: "Room for more" },
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
