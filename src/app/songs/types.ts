import Song from "models/Song";
import {
  GET_ALL,
  GET_BY_ID,
  ADD,
  UPDATE_BY_ID,
  REMOVE_BY_ID,
} from "./constants";

export interface IStateSong {
  songs: Song[];
  activeSong: Song | null;
  isLoading: boolean;
  error: any;
}

interface IGetAllAction {
  type: typeof GET_ALL;
  payload: Song[];
}

interface IGetByIdAction {
  type: typeof GET_BY_ID;
  payload: Song;
}

interface IAddAction {
  type: typeof ADD;
  payload: Song;
}

// interface IUpdateByIdAction {
//   type: typeof UPDATE_BY_ID;
//   payload: Song;
// }

interface IRemoveByIdAction {
  type: typeof REMOVE_BY_ID;
  payload: Song;
}

export type SongActionType =
  | IGetAllAction
  | IGetByIdAction
  | IAddAction
  | IRemoveByIdAction;
