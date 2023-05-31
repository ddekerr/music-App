import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const UserCabContainer = styled.ul`
  font-size: 20px;
  margin-top: 40px;
  margin-left: 10px;
`;

export const PositionDoor = styled.li`
  :not(:nth-last-of-type(-n + 1)) {
    margin-bottom: 10px;
  };

`

export const DoorName = styled.p`
  color: white;
  padding-left: 10px;
  padding-right: 90px;
`;

export const DoorLink = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
`;