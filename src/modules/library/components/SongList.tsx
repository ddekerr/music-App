import { nanoid } from "nanoid";
import { Song } from "./SongList.styled";

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

function SongList() {
  return (
    <ul className="container">
      {songList.map(({ title, author }) => (
        <Song key={nanoid()}>
          <div className="song">
            <div className="song__title">{title}</div>
            <div className="song__author">{author}</div>
          </div>
          <div className="action">...</div>
        </Song>
      ))}
    </ul>
  );
}

export default SongList;
