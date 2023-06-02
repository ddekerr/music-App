import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAll, getSongById, addSong, removeSongById } from './operations';
import {
  handlePending,
  handleRejected,
  handleFulfilled,
  handleGetAllFulfilled,
  handleGetByIdFulfilled,
  handleAdd,
  handleRemoveById,
} from './handlers';

const operations = [getAll, getSongById, addSong, removeSongById];
const getOperations = type => operations.map(operation => operation[type]);

const initialState = {
  items: [],
  activeSong: null,
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAll.fulfilled, handleGetAllFulfilled)
      .addCase(getSongById.fulfilled, handleGetByIdFulfilled)
      .addCase(addSong.fulfilled, handleAdd)
      .addCase(removeSongById, handleRemoveById)
      .addMatcher(isAnyOf(...getOperations('pending')), handlePending)
      .addMatcher(isAnyOf(...getOperations('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getOperations('fulfilled')), handleFulfilled);
  },
});

export const songsReducer = songsSlice.reducer;
