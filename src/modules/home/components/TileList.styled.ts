import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const TileListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TileItemContainer = styled.li`
  flex-basis: calc((100% - 10px) / 2);
  :nth-of-type(2n + 1) {
    margin-right: 10px;
  }
  :not(:nth-last-of-type(-n + 2)) {
    margin-bottom: 10px;
  }
`;

export const TileLinkName = styled.p`
  font-size: 18px;
  line-height: 1.16;
  color: white;
  font-weight: 500;
  text-align: center;
  margin-top: 5px;
`

export const TileLink = styled(NavLink)`
  
`
