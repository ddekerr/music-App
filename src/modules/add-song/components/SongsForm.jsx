import { Formik } from "formik";
import { AlbumFoto, SongName, NameAuthor, AddMP4, AddMP3, AddVers, SongArea, NameArea, Submit } from "./SongsForm.styled";
import SongFoto from "../../../image/plus.png"


const SongForm = () => {
  return 
  <div>
    <AlbumFoto src={SongFoto} alt="" />
    <SongName></SongName>
    <NameAuthor></NameAuthor>
    <AddMP4></AddMP4>
    <AddMP3></AddMP3>
    <AddVers></AddVers>
    <SongArea>
      <NameArea></NameArea>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </SongArea>
    <Submit></Submit>
  </div>;
};

export default SongForm;
