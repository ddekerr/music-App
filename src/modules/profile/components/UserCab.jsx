import { nanoid } from "nanoid";
import {
  UserCabContainer,
  PositionDoor,
  DoorName,
  DoorLink,
} from "./UserCab.styled";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SlNote, SlArrowRight } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { ImExit } from "react-icons/im";

const doors = [
  { icon: AiOutlinePlusCircle, text: "Add Songs" },
  { icon: SlNote, text: "My Playlist" },
  { icon: IoIosPeople, text: "Friends" },
  { icon: ImExit, text: "Log Out" },
];

const UserCab = () => {
  return (
    <UserCabContainer>
      {doors.map(({ icon: Icon, text }) => (
        <PositionDoor>
          <DoorLink to="#">
            <Icon />
            <DoorName>{text}</DoorName>
            <SlArrowRight />
          </DoorLink>
        </PositionDoor>
      ))}
    </UserCabContainer>
  );
};

export default UserCab;
