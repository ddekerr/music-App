import { FC } from "react";
import { TileItemContainer, TileLinkName, TileLink } from "./TileList.styled";

interface ITile {image:string; nametile:string}


const TileItem: FC <ITile> = ({image, nametile})=>{

  return(
    <TileItemContainer>
      <TileLink to= "#" >
        <img src={image} alt="foto"/>
        <TileLinkName>{nametile}</TileLinkName>
      </TileLink>
    </TileItemContainer>
  )
}

export default TileItem