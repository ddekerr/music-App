import { FC } from "react";


interface ITile {image:string; nametile:string}


const TileItem: FC <ITile> = ({image, nametile})=>{

  return(
    <li>
    <a href="#">
        <img src={image} alt="foto"/>
        <p>{nametile}</p>
      </a>
    </li>
  )
}

export default TileItem