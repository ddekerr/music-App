import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://songs-api-01v7.onrender.com/api';

/**
 * Get all songs
 * @return arr of objects
 */
export const getAll = createAsyncThunk('songs/getAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('./songs');
    return response.data; // []
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

/**
 * Get one song by ID
 * @param id: String
 * @return object
 */
export const getSongById = createAsyncThunk(
  'songs/getSongById',
  async (songId, thunkAPI) => {
    try {
      const response = await axios.get(`./songs/${songId}`);
      return response.data; // {}
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Add the one song
 * @param newSong: Object
 * @return Object of new song
 */
export const addSong = createAsyncThunk(
  'songs/addSong',
  async (newSong, thunkAPI) => {
    try {
      const response = await axios.post('./songs', newSong);
      return response.data;
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

/**
 * Update song by ID
 * params @
 */
// export const updateSongById = createAsyncThunk(
//   "songs/updateSongById",
//   async (song, thunkAPI) => {
//     try {
//       const { id, title, author } = song;
//       const response = await axios.put(`./songs/${id}`, {
//         title,
//         author,
//       });
//       return response.data;
//     } catch (error) {
//       let message = "Unknown Error";
//       if (error instanceof Error) message = error.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

/**
 * Remove song by ID
 * @param id: String
 * @return remove Object
 */
export const removeSongById = createAsyncThunk(
  'songs/removeSongById',
  async (songId, thunkAPI) => {
    try {
      const response = await axios.delete(`./songs/${songId}`);
      return response.data.result;
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
