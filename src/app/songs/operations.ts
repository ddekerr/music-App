import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_ALL,
  GET_BY_ID,
  ADD,
  UPDATE_BY_ID,
  REMOVE_BY_ID,
} from "./constants";
import Song from "models/Song";

axios.defaults.baseURL = "https://songs-api-01v7.onrender.com/api";

/**
 * Get all songs
 * @return arr of objects
 */
export const getAll = createAsyncThunk(GET_ALL, async (_, thunkAPI) => {
  try {
    const response = await axios.get("./songs");
    return response.data; // []
  } catch (error) {
    let message = "Unknown Error";
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
  GET_BY_ID,
  async (songId: string, thunkAPI) => {
    try {
      const response = await axios.get(`./songs/${songId}`);
      return response.data; // {}
    } catch (error) {
      let message = "Unknown Error";
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
  ADD,
  async (newSong: Song, thunkAPI) => {
    try {
      const response = await axios.post("./songs");
      return response.data;
    } catch (error) {
      let message = "Unknown Error";
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
//   UPDATE_BY_ID,
//   async (song: Song, thunkAPI) => {
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
  REMOVE_BY_ID,
  async (songId: String, thunkAPI) => {
    try {
      const response = await axios.delete(`./songs/${songId}`);
      return response.data.result;
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
