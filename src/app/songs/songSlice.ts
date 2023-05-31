import { createSlice } from "@reduxjs/toolkit";
import { getAll, getSongById, addSong, removeSongById } from "./operations";
import { IStateSong, SongActionType } from "./types";

const handlePending = (state: IStateSong) => {
  state.isLoading = true;
};

const handleRejected = (state: IStateSong, action: SongActionType) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const handleGetAllFullfiled = (state: IStateSong, action: SongActionType) => {
//   state.songs = action.payload
// }

const initialState: IStateSong = {
  songs: [],
  activeSong: null,
  isLoading: false,
  error: null,
};

// const songsSlice = createSlice({
//   name: "songs",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAll.pending, handlePending)
//       .addCase(getAll.rejected, handleRejected);
//     builder.addCase(getSongById.pending, handlePending);
//     builder.addCase(addSong.pending, handlePending);
//     builder.addCase(removeSongById.pending, handlePending);
//   },
// });
