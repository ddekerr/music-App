import { AiTwotonePlusCircle, AiTwotoneHeart } from 'react-icons/ai';
import { RxExit } from 'react-icons/rx';
import { HiMusicalNote } from 'react-icons/hi2';

export const userActionList = [
  { icon: AiTwotonePlusCircle, text: 'Add Songs', href: '/add-song', iconColor: "#0b6112"},
  { icon: HiMusicalNote, text: 'My Playlist', href: './playlist', iconColor: "#0b4061"},
  { icon: AiTwotoneHeart, text: 'Favorite', href: './favorite', iconColor: "#d63209"},
  { icon: RxExit, text: 'Log Out', href: '/logout', iconColor: "#2d2e00"},
];
