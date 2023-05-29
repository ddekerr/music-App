import { FC } from "react";
import { TileItemContainer } from "./TileList.styled";


interface ITile {image:string; nametile:string}


const TileItem: FC <ITile> = ({image, nametile})=>{

  return(
    <TileItemContainer>
    <a href="#">
        <img src={image} alt="foto"/>
        <p>{nametile}</p>
      </a>
    </TileItemContainer>
  )
}

export default TileItem