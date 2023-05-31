import { AiTwotonePlusCircle, AiTwotoneHeart } from 'react-icons/ai';
import { RxExit } from 'react-icons/rx';
import { HiMusicalNote } from 'react-icons/hi2';

export const userActionList = [
  { icon: AiTwotonePlusCircle, text: 'Add Songs', href: './add-song' },
  { icon: HiMusicalNote, text: 'My Playlist', href: './playlist' },
  { icon: AiTwotoneHeart, text: 'Favorite', href: './favorite' },
  { icon: RxExit, text: 'Log Out', href: '/logout' },
];
